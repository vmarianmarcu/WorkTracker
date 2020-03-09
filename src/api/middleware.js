import { validateAction, validateActionType } from './validate';
import callApi from './fetch';
import * as bodyUtils from './bodyUtils';

const API_VALIDATION_ERROR = 'API_VALIDATION_ERROR';
const HEADERS_DEFAULT = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

function renderEndpoint(action, getState) {
    let { endpoint } = action;
    if (typeof endpoint === 'function') {
        endpoint = endpoint(getState());
    }

    return endpoint;
}

function rendersJWTHeader(getState) {
    const { authData } = getState();
    const token = authData && authData.successful && authData.payload && authData.payload.token;

    return { 'Authorization': token ? `Bearer ${token}` : null };
}

function renderHeaders(action, getState) {
    let { headers } = action;
    if (typeof headers === 'function') {
        headers = headers(getState());
    }

    return { ...HEADERS_DEFAULT, ...headers, ...rendersJWTHeader(getState) };
}

function renderOptions(action, getState) {
    let { options } = action;
    if (typeof options === 'function') {
        options = options(getState());
    }

    return options;
}

function renderBody(action) {
    const { body } = action;
    return body && bodyUtils.formatBody(body);
}

function apiMiddleware({ dispatch, getState }) {
    return next => (action) => {
        if (!validateActionType(action)) {
            return next(action);
        }

        const validationResult = validateAction(action);

        if (validationResult && validationResult.length) {
            return next(makeValidationErrorAction(validationResult));
        }

        const {
            types,
            method,
            shouldCallAPI = () => true,
            params,
            payload = {},
            reducer
        } = action;

        if (!shouldCallAPI(getState())) {
            return null;
        }

        const requestingType = types[0];
        const endpoint = renderEndpoint(action, getState);
        const headers = renderHeaders(action, getState);
        const options = renderOptions(action, getState);
        const body = renderBody(action);

        dispatch({ payload, params, type: requestingType, reducer });

        let apiPromise;

        try {
            apiPromise = callApi(endpoint, method, headers, body, options)
                .then(response => processResponse(response, action, dispatch))
                .catch((error) => {
                    processError(error, action, dispatch);
                    // throw error;
                });
        } catch (error) {
            console.log(`Internal error ${error}`);
            processError(error, action, dispatch);
            throw error;
        }
        return apiPromise;
    };
}

function processResponse(response, action, dispatch) {
    const [
        requestingType,
        successType,
        failureType
    ] = action.types;

    if (response && response.status === 401) {
        dispatch(makeAuthenticateAction());
        return Promise.reject(response);
    }
    if (response && response.status === 412) {
        dispatch(makePasswordChangeAction());
        return Promise.reject(response);
    }

    if (response && response.ok) { //Successful response - status code 200-299
        return response.text()
            .then(bodyText => dispatch(makeSuccessAction(bodyText, action, successType)))
            .catch(error => processError(error, action, dispatch));
        // eslint-disable-next-line no-else-return
    } else if (response) { // API Error response
        response.text()
            .then(bodyText => dispatch(makeFailedAction(response.statusText, action, failureType, bodyText)))
            .catch(error => processError(error, action, dispatch));
        return Promise.reject(response);
    } else {
        return Promise.reject(response);
    }
}

function processError(error, action, dispatch) {
    console.error(`Process error ${error}`);
    const [
        requestingType,
        successType,
        failureType
    ] = action.types;
    dispatch(makeFailedAction(error, action, failureType));
    // Promise.reject(error);
}

function makeSuccessAction(bodyText, action, successType) {
    const {
        interceptResponse = res => res,
        params,
        payload = {},
        reducer
    } = action;
    const body = parseBody(bodyText);
    return {
        payload,
        params,
        response: parseResponse(body, interceptResponse),
        type: successType,
        reducer
    };
}

function makeFailedAction(error, action, failureType, bodyText) {
    const {
        interceptError = err => err,
        reducer
    } = action;
    const body = parseBody(bodyText);
    return {
        type: failureType,
        payload: body,
        error: parseError(error, interceptError, body),
        reducer
    };
}

function makeAuthenticateAction() {
    return {
        type: 'AUTHENTICATE'
    };
}

function makePasswordChangeAction() {
    return {
        type: 'CHANGE_PASS'
    };
}

function makeValidationErrorAction(errors) {
    return {
        type: API_VALIDATION_ERROR,
        payload: errors
    };
}

function parseBody(bodyText) {
    return bodyText ? JSON.parse(bodyText) : {};
}

function parseResponse(body, interceptResponse) {
    return interceptResponse(body);
}

function parseError(error, interceptError) {
    const { message = 'An error occurred, please try again' } = error;
    return interceptError({ errors: [message] });
}

function fetchStream(stream) {
    const reader = stream.getReader();
    let result = '';

    reader.read().then(({ done, value }) => {
        if (done) {
            console.log(`Stream complete. Content : ${result} ${result.length} characters`);
            return;
        }

        const chunk = value;
        result += chunk;
    });
}

export default apiMiddleware;

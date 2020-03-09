import { ISIPP_API, VALID_KEYS, MANDATORY_KEYS, VALID_METHODS } from 'api';

function validateKeys(action) {
    Object.keys(action).forEach((key) => {
        if (!VALID_KEYS.includes(key)) {
            return false;
        }
    });
    return true;
}

function validateMandatoryKeys(action) {
    MANDATORY_KEYS.forEach((key) => {
        if (!Object.keys(action).includes(key)) {
            return false;
        }
    });
    return true;
}

function validateMethod(method) {
    return method && VALID_METHODS.includes(method);
}

function validateActionType(action) {
    return action && action.type && action.type === ISIPP_API;
}

function validateEndPoint(endpoint) {
    if (!endpoint) return false;

    if (typeof endpoint === 'function') {
        endpoint = endpoint();
    }

    return typeof endpoint === 'string';
}

function validateAction(action) {
    const errors = [];
    if (!validateMethod(action.method)) {
        errors.push(`Invalid API method. Valid methods are ${VALID_METHODS}`);
    }

    if (!validateKeys(action)) {
        errors.push(`Invalid API keys. Valid keys are ${VALID_KEYS}`);
    }

    if (!validateMandatoryKeys(action)) {
        errors.push(`Mandatory API keys missing. Mandatory keys are ${MANDATORY_KEYS}`);
    }

    if (!Array.isArray(action.types) || action.types.length !== 3 || !action.types.every(type => typeof type === 'string')) {
        errors.push('Expected an array of three string types.');
    }

    if (action.interceptResponse && typeof action.interceptResponse !== 'function') {
        errors.push(`Expected a function for intercepting response. Got[${typeof action.interceptResponse}]`);
    }

    if (action.interceptError && typeof action.interceptError !== 'function') {
        errors.push(`Expected a function for intercepting errors. Got[${typeof action.interceptError}]`);
    }

    if (!validateEndPoint(action.endpoint)) {
        errors.push(`Expected a string endpoint or function. Got[${typeof action.endpoint}]`);
    }

    return errors;
}

export { validateActionType, validateAction };

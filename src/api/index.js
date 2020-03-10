import { API_SERVER_URL } from 'config';

export const ISIPP_API = 'Isipp Middleware Action Type';

export const MANDATORY_KEYS = [
    'type',
    'types',
    'endpoint',
    'method'
];

export const VALID_KEYS = [
    'type',
    'types',
    'endpoint',
    'options',
    'method',
    'body',
    'headers',
    'credentials'
];

export const VALID_METHODS = [
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS'
];

export const makeGetApiAction = (types, endpoint, params, reducer) => ({
    type: ISIPP_API,
    types,
    method: 'GET',
    endpoint: `${API_SERVER_URL}${endpoint}`,
    params,
    reducer
});

export const makePostApiAction = (types, endpoint, body) => ({
    type: ISIPP_API,
    types,
    method: 'POST',
    endpoint: `${API_SERVER_URL}${endpoint}`,
    body
});

export const makePutApiAction = (types, endpoint, body) => ({
    type: ISIPP_API,
    types,
    method: 'PUT',
    endpoint: `${API_SERVER_URL}${endpoint}`,
    body
});

export const makeDeleteApiAction = (types, endpoint, body) => ({
    type: ISIPP_API,
    types,
    method: 'DELETE',
    endpoint: `${API_SERVER_URL}${endpoint}`,
    body
});

export { apiReducer, apiReducerParam } from './reducers';
export { default as apiMiddleware } from './middleware';

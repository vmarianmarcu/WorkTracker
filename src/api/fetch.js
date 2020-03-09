function callApi(endpoint, method, headers, body, options) {
    return fetch(endpoint, {
        ...options,
        method,
        body: body || undefined,
        headers: headers || {}
    });
}

export default callApi;
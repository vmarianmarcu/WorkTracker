
import { API_SERVER_URL, PROJECTS } from '../config';


export const projectService = {
    getAll
};

function getAll() {

    const requestOptions = {
        method:  'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    return fetch(`${API_SERVER_URL}${PROJECTS}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

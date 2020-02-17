
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
        // if (response.status === 201) {
        //     console.log("LOgarea sa executat cu success!!!");

        // }

        if (!response.ok) {
            // if ((response.status >= 200) && (response.status <= 299)) {
            //     // eslint-disable-next-line no-restricted-globals
            //     location.reload(false);
            // }
        
            if (response.status === 401) {
                // auto logout if 401 response returned from api
               // logout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

// import { API_SERVER_URL, PROJECTS } from '../config';

// export const projectService = {
//     fetchProjects
// };

// export function fetchProjects() {
//     const requestOptions = {
//         method:  'GET',
//         headers: { 'Content-Type': 'application/json' },
//     }

//     return fetch(`${API_SERVER_URL}${PROJECTS}`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         // if (response.status === 201) {
//         //     console.log("LOgarea sa executat cu success!!!");

//         // }

//         if (!response.ok) {
//             if ((response.status >= 200) && (response.status <= 299)) {
//                 // eslint-disable-next-line no-restricted-globals
//                 location.reload(false);
//             }
        
//             // if (response.status === 401) {
//             //     // auto logout if 401 response returned from api
//             //     logout();
//             //     // eslint-disable-next-line no-restricted-globals
//             //     location.reload(true);
//             // }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }

import { API_SERVER_URL, PROJECTS } from '../config';

import { projectActions } from '../actions';

export const fetchProjects = {
    fetchAllProjects
}

function fetchAllProjects() {

        const requestOptions = {
            method:  'GET',
            headers: { 'Content-Type': 'application/json' },
        }
        
    return dispatch => {
        dispatch(projectActions.request());
        fetch(`${API_SERVER_URL}${PROJECTS}`, requestOptions)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(projectActions.success(res.projects));
            return res.products;
        })
        .catch(error => {
            dispatch(projectActions.failure(error));
        })
    }
}
export default fetchAllProjects;




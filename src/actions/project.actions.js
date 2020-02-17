import { projectConstants } from '../constants';

export const projectActions = {
    request,
    success,
    failure
}

function request() { 
    return { 
        type: projectConstants.FETCH_PROJECTS_PANDING 
    } 
}

function success(projects) {
    return {
        type: projectConstants.FETCH_PROJECTS_SUCCESS, projects 
    } 
}

function failure(error) {
    return { 
        type:  projectConstants.FETCH_PROJECTS_ERROR, error 
    } 
}


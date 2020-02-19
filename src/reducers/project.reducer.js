import { projectConstants } from '../constants/project.constants';


export function projects(state = {}, action) {
    switch(action.type) {
        case projectConstants.FETCH_PROJECTS_PANDING:
            return {
                pending: true
            }
        case projectConstants.FETCH_PROJECTS_SUCCESS: 
            return {
                pending: false,
                items: action.projects
            }
        case projectConstants.FETCH_PROJECTS_ERROR: {
            return {
                pending:  false,
                error: action.error
            }
        }
        default: 
            return state;
    }

}

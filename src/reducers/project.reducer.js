
import { projectActions } from '../actions/project.actions';

const initialState = {
    pending: false,
    projects: [],
    error: null
}

export function projectsReducer(state = initialState, action) {
    switch(action.type) {
        case projectActions.FETCH_PROJECTS_PANDING:
            return {
                ...state,
                pending: true
            }
        case projectActions.FETCH_PROJECTS_SUCCESS: 
            return {
                ...state,
                pending: false,
                projects: action.projects
            }
        case projectActions.FETCH_PROJECTS_ERROR: {
            return {
                ...state,
                pending:  false,
                error: action.error
            }
        }
        default: 
            return state;
    }

}

export const getProjects = state => state.projects;
export const getProjectsPending = state => state.panding;
export const getProjectsError = state => state.error;


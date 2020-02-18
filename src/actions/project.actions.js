import { projectConstants } from '../constants';
import { projectService } from '../services/project.service';

export const projectActions = {
    getAll
}

function getAll() {
    return dispatch => {
        dispatch(request());

        projectService.getAll()
            .then(
                projects => dispatch(success(projects)),
                error => dispatch(failure(error.toString()))
            );
    };

function request(projects) { return { type: projectConstants.FETCH_PROJECTS_PANDING,projects } }
function success(projects) { return { type: projectConstants.FETCH_PROJECTS_SUCCESS, projects } }
function failure(error) { return {  type:  projectConstants.FETCH_PROJECTS_ERROR, error } }

}
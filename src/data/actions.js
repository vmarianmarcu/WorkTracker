import { makePostApiAction, makeGetApiAction } from 'api';
import { PROJECTS } from 'config';

import {
    ACTION_LOAD_PROJECTS_REQUESTING,
    ACTION_LOAD_PROJECTS_SUCCESS,
    ACTION_LOAD_PROJECTS_FAIL,

    ACTION_USERS_REQUESTING,
    ACTION_USERS_SUCCESS,
    ACTION_USERS_FAIL,

    ACTION_DASHBOARD_REQUESTING,
    ACTION_DASHBOARD_SUCCESS,
    ACTION_DASHBOARD_FAIL,

    ACTION_ADD_PROJECT_REQUESTING,
    ACTION_ADD_PROJECT_SUCCESS,
    ACTION_ADD_PROJECT_FAIL

} from './constants';

export const getCurrentUsers = () => makeGetApiAction(
    [ACTION_USERS_REQUESTING, ACTION_USERS_SUCCESS, ACTION_USERS_FAIL],
    `/registredUsers`
);

export const loadProjects = () => makeGetApiAction(
    [ACTION_LOAD_PROJECTS_REQUESTING, ACTION_LOAD_PROJECTS_SUCCESS, ACTION_LOAD_PROJECTS_FAIL],
    `${PROJECTS}`
);

export const postCurrentDasboardData = () => makePostApiAction(
    [ACTION_DASHBOARD_REQUESTING, ACTION_DASHBOARD_SUCCESS, ACTION_DASHBOARD_FAIL],
    '/workDetails'
);

export const postNewProject = () => makePostApiAction(
    [ACTION_ADD_PROJECT_REQUESTING, ACTION_ADD_PROJECT_SUCCESS, ACTION_ADD_PROJECT_FAIL],
    '/projects'
);
import { makeGetApiAction, makePostApiAction, makePutApiAction, makeDeleteApiAction } from 'api/index';

import {
    ACTION_LOAD_CURRENT_PROJRCTS_REQUESTING,
    ACTION_LOAD_CURRENT_PROJRCTS_SUCCESS,
    ACTION_LOAD_CURRENT_PROJECTS_FAIL,
} from '../constants/dashboard.constants';

export const loadCurrentProjects = () => makeGetApiAction(
    [ACTION_LOAD_CURRENT_PROJRCTS_REQUESTING, ACTION_LOAD_CURRENT_PROJRCTS_SUCCESS, ACTION_LOAD_CURRENT_PROJECTS_FAIL],
    '/projects'
);

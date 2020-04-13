import { makeGetApiAction } from 'api';
import { PROJECTS } from 'config';

import {
    ACTION_LOAD_PROJECTS_REQUESTING,
    ACTION_LOAD_PROJECTS_SUCCESS,
    ACTION_LOAD_PROJECTS_FAIL,
} from './constants';

export const loadProjects = () => makeGetApiAction(
    [ACTION_LOAD_PROJECTS_REQUESTING, ACTION_LOAD_PROJECTS_SUCCESS, ACTION_LOAD_PROJECTS_FAIL],
    `${PROJECTS}`
);
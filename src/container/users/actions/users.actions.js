import { makeGetApiAction } from 'api/index';

import {
    ACTION_USERS_REQUESTING,
    ACTION_USERS_SUCCESS,
    ACTION_USERS_FAIL
} from '../constants/user.constants';

const getCurrentUsers = () => makeGetApiAction(
    [ACTION_USERS_REQUESTING, ACTION_USERS_SUCCESS, ACTION_USERS_FAIL],
    '/user'
);
export default getCurrentUsers;

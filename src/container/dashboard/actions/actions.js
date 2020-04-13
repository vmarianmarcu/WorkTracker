import { makePostApiAction } from 'api/index';

import {
    ACTION_DASHBOARD_REQUESTING,
    ACTION_DASHBOARD_SUCCESS,
    ACTION_DASHBOARD_FAIL
} from '../constants/dashboard.constants';

const postCurrentDasboardData = () => makePostApiAction(
    [ACTION_DASHBOARD_REQUESTING, ACTION_DASHBOARD_SUCCESS, ACTION_DASHBOARD_FAIL],
    '/workDetails'
);
export default postCurrentDasboardData;

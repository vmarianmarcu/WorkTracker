import { makeGetApiAction, makePostApiAction, makePutApiAction, makeDeleteApiAction } from 'api';
import { PROJRCTS } from 'config';

import {
    ACTION_LOAD_PROJRCTS_REQUESTING,
    ACTION_LOAD_PROJRCTS_SUCCESS,
    ACTION_LOAD_PROJRCTS_FAIL,
} from 'constants';

export const loadProjects = () => makeGetApiAction(
    [ACTION_LOAD_PROJRCTS_REQUESTING, ACTION_LOAD_PROJRCTS_SUCCESS, ACTION_LOAD_PROJRCTS_FAIL],
    `${PROJRCTS}`
);

import { combineReducers } from 'redux';
import { authentication } from 'reducers/authentication.reducer';
import {reducers as DataReducers} from 'data/reducers'

const rootReducer = combineReducers({
   authentication,
   ...DataReducers
});

export default rootReducer;
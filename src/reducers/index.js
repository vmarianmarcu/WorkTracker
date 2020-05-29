
import { combineReducers } from 'redux';
import { authentication } from 'reducers/authentication.reducer';
import { registration } from 'reducers/registration.reducer';
import { projects } from 'reducers/project.reducer';
import {reducers as DataReducers} from 'data/reducers'

const rootReducer = combineReducers({
   authentication,
   registration,
   projects,
   ...DataReducers
});

export default rootReducer;
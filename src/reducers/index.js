
import { combineReducers } from 'redux';
import { alert } from 'reducers/alert.reducer';
import { authentication } from 'reducers/authentication.reducer';
import { registration } from 'reducers/registration.reducer';
import { projects } from 'reducers/project.reducer';
import { dashboard } from 'reducers/dashboard.reducer';
import {reducers as DataReducers} from 'data/reducers'

const rootReducer = combineReducers({
   authentication,
   registration,
   alert,
   projects,
   dashboard,
   ...DataReducers
});

export default rootReducer;

import { combineReducers } from 'redux';
import { alert } from 'reducers/alert.reducer';
import { authentication } from 'reducers/authentication.reducer';
import { registration } from 'reducers/registration.reducer';
import { users } from 'reducers/user.reducer';
import { projects } from 'reducers/project.reducer';
import { dashboard } from 'reducers/dashboard.reducer';
import { apiReducer } from 'api/reducers';
import { apiReducerParam } from 'api/reducers'

const rootReducer = combineReducers({
   authentication,
   registration,
   users,
   alert,
   projects,
   dashboard,
   // apiReducer,
   // apiReducerParam
});

export default rootReducer;
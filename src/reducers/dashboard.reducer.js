import { 
  ACTION_LOAD_CURRENT_PROJRCTS_REQUESTING,
  ACTION_LOAD_CURRENT_PROJRCTS_SUCCESS,
  ACTION_LOAD_CURRENT_PROJECTS_FAIL
 } from 'container/dashboard/constants/dashboard.constants';

export function dashboard(state = {}, action) {
    switch (action.type) {
      case ACTION_LOAD_CURRENT_PROJRCTS_REQUESTING:
        return {
          dashboardPost: true
        };
      case ACTION_LOAD_CURRENT_PROJRCTS_SUCCESS:
        return {};
      case ACTION_LOAD_CURRENT_PROJECTS_FAIL:
        return {};
      default:
        return state
    }
  }







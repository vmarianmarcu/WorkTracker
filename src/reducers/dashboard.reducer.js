import { 
  ACTION_DASHBOARD_REQUESTING,
  ACTION_DASHBOARD_SUCCESS,
  ACTION_DASHBOARD_FAIL
 } from 'container/dashboard/constants/dashboard.constants';

export function dashboard(state = {}, action) {
    switch (action.type) {
      case ACTION_DASHBOARD_REQUESTING:
        return {
          dashboardPost: true
        };
      case ACTION_DASHBOARD_SUCCESS:
        return {};
      case ACTION_DASHBOARD_FAIL:
        return {};
      default:
        return state
    }
  }







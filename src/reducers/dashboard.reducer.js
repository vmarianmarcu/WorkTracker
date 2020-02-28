import { dashboardConstants } from 'container/dashboard/constants/dashboard.constants';

export function dashboard(state = {}, action) {
    switch (action.type) {
      case dashboardConstants.DASHBOARD_REQUEST:
        return {
          dashboardPost: true,
        };
      case dashboardConstants.DASHBOARD_SUCCESS:
        return {};
      case dashboardConstants.DASHBOARD_FAILURE:
        return {};
      default:
        return state
    }
  }







import { dashboardConstants } from 'container/dashboard/constants/dashboard.constants';
import { dashboardService } from 'container/dashboard/services/dashboard.services';
import { history } from 'helpers/history';
import { alertActions } from 'actions/alert.action';

export const dashboardActions = {
    postAllFromDashboard
};

function postAllFromDashboard(dash) {
    return dispatch => {
        dispatch(request(dash));

        dashboardService.dashboard(dash)
            .then(
                dash => {
                    dispatch(success(dash));
                    history.push('/dashboard');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
        };

    function request(dash) { return { type: dashboardConstants.DASHBOARD_REQUEST , dash } }
    function success(dash) { return { type: dashboardConstants.DASHBOARD_SUCCESS, dash } }
    function failure(error) { return { type: dashboardConstants.DASHBOARD_FAILURE, error } }
}

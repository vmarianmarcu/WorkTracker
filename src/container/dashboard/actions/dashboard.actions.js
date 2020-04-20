import { dashboardService } from 'container/dashboard/services/dashboard.services';
import { history } from 'helpers/history';
import { alertActions } from 'actions/alert.action';

export const dashboardActions = {
    postAllFromDashboard
};

function postAllFromDashboard(dash) {
    return dispatch => {

        dashboardService.dashboard(dash)
            .then(
                dash => {
                    history.push('/dashboard');
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

}

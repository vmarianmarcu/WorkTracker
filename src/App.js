import React, { Component } from 'react';
import Login from 'container/login/LoginPage/Login';
import RegisterPage from 'container/login/RegisterPage/Register';

import DashboardPage from 'container/dashboard/DashboardPage';
import ProjectPage  from 'container/project/ProjectPage';
import DetailsPage from 'container/details/DetailsPage';
import EventPage from 'container/events/EventPage';
import UsersPage from 'container/users/UserPage';

// The css dependencies for PrimePeact components
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";


import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'helpers';
import { alertActions } from 'actions';
import { PrivateRoute } from 'components/PrivateRoute';

import './static/app.css'


class App extends Component {

  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
}

  render() {
    const { alert } = this.props;
    return (
      <div className="container">
         {  alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        <Router history={history}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={RegisterPage} />
              <PrivateRoute path="/dashboard" component={DashboardPage} />
              <PrivateRoute path="/projects" component={ProjectPage} />
              <PrivateRoute path="/details" component={DetailsPage} />
              <PrivateRoute path="/users" component={UsersPage} />
              <PrivateRoute path="/events" component={EventPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators) (App);

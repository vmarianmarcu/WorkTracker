import React, { Component } from 'react';
import Login from 'container/login/LoginPage/Login';
import RegisterPage from 'container/login/RegisterPage/Register';

import Dashboard from 'container/dashboard/DashboardPage/Dashboard';
import ProjectPage  from 'container/project/ProjectPage';
import DetailsPage from 'container/details/DetailsPage';
import EventPage from 'container/events/EventPage';

// The css dependencies for PrimePeact components
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'static/primeflex.css';


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
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/projects" component={ProjectPage} />
              <Route path="/details" component={DetailsPage} />
              <Route path="/events" component={EventPage} />
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

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
import { history } from 'helpers';
import { PrivateRoute } from 'components/PrivateRoute';

import './static/app.css'


class App extends Component {

  render() {
    return (
      <div className="container">
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

export default App;

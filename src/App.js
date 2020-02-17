import React, { Component } from 'react';
import Login from './container/LoginPage/Login';
import RegisterPage from './container/RegisterPage/Register';

import Navbar from './container/Navbar/Navbar';
import Dashboard from './container/DashboardPage/Dashboard';
import Projects  from './container/Navbar/Projects';
import Details from './container/Navbar/Details';

// The css dependencies for PrimePeact components
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';

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
         {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        <Router history={history}>
          <div className="App">
            {/* <Navbar/> */}
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/projects" component={Projects} />
            <Route path="/details" component={Details} />
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

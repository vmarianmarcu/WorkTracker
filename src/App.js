import  React, { Component } from 'react';
import Login from './container/Login';
import RegisterPage from './container/Register';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './container/Navbar';
import Dashboard from './container/Dashboard';
import Projects  from './container/Projects';
import Details from './container/Details';

// The css dependencies for PrimePeact components
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projects" component={Projects} />
          <Route path="/details" component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

import  React, { Component } from 'react';
import LoginPage from './container/LoginPage';
import RegisterPage from './container/RegisterPage';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './container/Navbar';
import Dashboard from './container/DashboardPage';
import Projects  from './container/ProjectsPage';
import Details from './container/DetailsPage';
import Logout from './container/LogoutPage';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projects" component={Projects} />
          <Route path="/details" component={Details} />
          <Route path="/logout" component={Logout} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

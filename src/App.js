import React from 'react';
import LoginPage from './container/LoginPage';
import RegisterPage from './container/RegisterPage';
import DashboardPage from './container/DashboardPage';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <RegisterPage/>
      <DashboardPage/>
    </div>
  );
}

export default App;

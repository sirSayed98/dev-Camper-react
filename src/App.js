import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/layout/Navbar";
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
import resetPassword from "./pages/resetPassword";
import AuthState from "./context/auth/authState";
import Bootcamps from './Components/Bootcamp/Bootcamps'

import './App.css';
import './bootstrap.css'
const App = () => {
  return (
    <AuthState>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/reset-password" component={resetPassword} />
            <Route exact path="/register" component={register} />
            <Route exact path="/Bootcamps" component={Bootcamps} />
          </Switch>
        </Router>
      </Fragment>
    </AuthState>
  );
}

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/layout/Navbar";
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
import resetPassword from "./pages/resetPassword";
import AuthState from "./context/auth/authState";
import BootcampState from './context/bootcamp/bootcampState'
import Bootcamps from './Components/Bootcamp/Bootcamps'
import createBootcamp from './Components/Bootcamp/createBootcamp'
//import PrivateRoute from "./routing/privateRoute"

import './App.css';
import './bootstrap.css'
const App = () => {
  return (
    <AuthState>
      <BootcampState>
        <Fragment>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/create-Bootcamp" component={createBootcamp} />
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/reset-password" component={resetPassword} />
              <Route exact path="/register" component={register} />
              <Route exact path="/Bootcamps" component={Bootcamps} />
            </Switch>
          </Router>
        </Fragment>
      </BootcampState>
    </AuthState>
  );
}

export default App;

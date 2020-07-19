import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/layout/Navbar";
import home from "./pages/home";
import login from "./pages/login";
import './App.css';
import './bootstrap.css'
const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login}/>
        </Switch>
      </Router>

    </Fragment>
  );
}

export default App;

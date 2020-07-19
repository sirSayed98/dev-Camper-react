import React, { Fragment } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from "./Components/layout/Navbar";
import './App.css';
import './bootstrap.css'
const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
      </Router>
      <div class="container">
        {/* <Switch>
          <Route exact path="/" component={Home}/>
        </Switch> */}
        <p>Hello</p>
      </div>
    </Fragment>
  );
}

export default App;

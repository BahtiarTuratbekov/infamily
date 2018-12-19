import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdoptiveParent from './components/AdoptiveParent';
import Documents from './components/Documents';
import Information from './components/Information';
import Test from './components/Test';
import AboutParents from './components/AboutParents';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AdoptiveParent} />
          <Route exact path="/docs" component={Documents} />
          <Route exact path="/info" component={Information} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/aboutparents" component={AboutParents} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route path="/" component={MoviesList} exact />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = ({ match }) => (
  <h1>{match.params.id}</h1>
);

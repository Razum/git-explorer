import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from './services/history';

import Header from './components/Header';

import Home from './containers/Home';
import User from './containers/User';
import NoMatch from './containers/NoMatch';


const App = () => (
  <div className="app-node">
    <Header />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:userName" component={User} />
        <Redirect from="/users" to="/" />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

export default App;

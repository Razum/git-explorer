import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';

import Header from './components/Header';


const App = () => (
  <div className="app-node">
    <Header />
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro red">
          56464532423423
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </Router>
  </div>
);

export default App;

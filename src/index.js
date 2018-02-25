import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './app/reducers';
import App from './app/App';
import registerServiceWorker from './app/services/registerServiceWorker';
import './styles/main.scss';


const initialState = {};

if (window.__INITIAL_STATE__) {
  const state = window.__INITIAL_STATE__;
  // eslint-disable-next-line no-console
  console.log('state', state);
  Object.keys(state).forEach((key) => {
    initialState[key] = state[key];
  });
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

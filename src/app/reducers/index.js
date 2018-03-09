import { combineReducers } from 'redux';
import usersReducer from './users';
import reposReducer from './repos';
import uiReducer from './ui';

export default combineReducers({
  users: usersReducer,
  repos: reposReducer,
  ui: uiReducer,
});

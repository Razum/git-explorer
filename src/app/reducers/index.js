import { combineReducers } from 'redux';
import users from './users';
import repos from './repos';
import ui from './ui';
import loading from './loading';

export default combineReducers({
  users,
  repos,
  ui,
  loading
});

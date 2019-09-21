import get from 'lodash/get';
import * as actionTypes from '../constants/actionTypes';
import { showNotification } from './ui';
import * as Api from '../services/api';

export function fetchUser(userName) {
  return async (dispatch) => new Promise(async (resolve, reject) => {
    dispatch({ type: actionTypes.FETCH_USER.PENDING });
    try {
      const [user, followers] = await Promise.all([
        Api.getUserInfo(userName),
        Api.getUserFollowers(userName),
      ]);
      dispatch({ type: actionTypes.FETCH_USER.SUCCESS, payload: { user, followers } });
      resolve({ user, followers });
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_USER.ERROR });
      dispatch(showNotification(get(e, 'response.data.message', 'Error')));
      reject(e.message);
    }
  });
}

export function fetchUserRepos(userName, params) {
  return async (dispatch) => new Promise(async (resolve, reject) => {
    dispatch({ type: actionTypes.FETCH_USER_REPOS.PENDING });
    try {
      const repos = await Api.getUserRepos(userName, params);
      dispatch({ type: actionTypes.FETCH_USER_REPOS.SUCCESS, payload: { userName, repos } });
      resolve({ userName, repos });
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_USER_REPOS.ERROR });
      dispatch(showNotification(get(e, 'response.data.message', 'Error')));
      reject(e.message);
    }
  });
}

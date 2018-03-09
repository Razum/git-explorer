import * as actionTypes from '../constants/actionTypes';

export function showNotification(message) {
  return {
    type: actionTypes.SHOW_NOTIFICATION,
    payload: { message },
  };
}

export function hideNotification() {
  return {
    type: actionTypes.HIDE_NOTIFICATION,
  };
}

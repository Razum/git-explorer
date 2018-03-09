import * as actionTypes from '../constants/actionTypes';

const initialState = {
  notification: {
    isShown: false,
    messages: [],
  },
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      const messages = state.notification.messages.concat(action.payload.message);
      return {
        ...state,
        notification: {
          isShown: true,
          messages,
        },
      };
    case actionTypes.HIDE_NOTIFICATION:
    case actionTypes.FETCH_USER:
    case actionTypes.FETCH_USER_REPOS:
      return {
        ...state,
        notification: {
          isShown: false,
          messages: [],
        },
      };
    default:
      return state;
  }
}

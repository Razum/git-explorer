import * as actionTypes from '../constants/actionTypes';

const initialState = {
  notification: {
    isShown: false,
    message: '',
  },
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        notification: {
          isShown: true,
          message: action.payload.message,
        },
      };
    case actionTypes.HIDE_NOTIFICATION:
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

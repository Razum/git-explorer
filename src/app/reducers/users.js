import * as actionTypes from '../constants/actionTypes';
import { excludeApiFields } from '../services/utils';

const initialState = {
  isFetching: false,
  items: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER.SUCCESS:
      const user = excludeApiFields(action.payload.user);
      const followers = action.payload.followers.map((follower) => excludeApiFields(follower));
      const userName = action.payload.user.login.toLowerCase();
      return {
        ...state,
        items: {
          ...state.items,
          [userName]: {
            ...user,
            followers_list: followers,
          },
        },
      };
    default:
      return state;
  }
}

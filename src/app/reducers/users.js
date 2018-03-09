import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../constants/actionTypes';
import { excludeApiFields } from '../services/utils';

const initialState = {
  isFetching: false,
  items: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, isFetching: true };
    case FETCH_USER_FAIL:
      return { ...state, isFetching: false };
    case FETCH_USER_SUCCESS:
      const user = excludeApiFields(action.payload.user);
      const followers = action.payload.followers.map(follower => excludeApiFields(follower));
      const userName = action.payload.user.login.toLowerCase();
      return {
        ...state,
        isFetching: false,
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

import * as actionTypes from '../constants/actionTypes';
import { excludeApiFields } from '../services/utils';

const initialState = {
  isFetching: false,
  items: {},
};

export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_REPOS:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_USER_REPOS_FAIL:
      return { ...state, isFetching: false };
    case actionTypes.FETCH_USER_REPOS_SUCCESS:
      const userName = action.payload.userName.toLowerCase();
      const repos = state.items[userName] || {};
      const items = action.payload.repos.reduce((hash, repo) => (
        {
          ...hash,
          [repo.name]: excludeApiFields(repo),
        }
      ), {});

      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          [userName]: {
            ...repos,
            ...items,
          },
        },
      };
    default:
      return state;
  }
}

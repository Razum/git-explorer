import { defineAction } from 'redux-define';
import { PENDING, SUCCESS, ERROR } from './states';

const REQUEST_STATES = [PENDING, SUCCESS, ERROR];

export const FETCH_USER = defineAction('FETCH_USER', REQUEST_STATES);
export const FETCH_USER_REPOS = defineAction('FETCH_USER_REPOS', REQUEST_STATES);

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

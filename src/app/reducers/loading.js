import { PENDING, SUCCESS, ERROR } from '../constants/states';

const initialState = {};

export default function loading(state = initialState, action) {
  const { type } = action;

  const matches = new RegExp(`(.*)_(${PENDING}|${SUCCESS}|${ERROR})`).exec(
    type
  );

  // not a *_PENDING / *_SUCCESS /  *_ERROR actions, so we ignore them
  if (!matches) return state;
  const [, requestName, requestState] = matches;
  const slug = requestName
    .split('_')
    .map((s, index) => (index
      ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
      : s.toLowerCase()))
    .join('');
  return {
    ...state,
    [`${slug}Loading`]: requestState === PENDING
  };
}

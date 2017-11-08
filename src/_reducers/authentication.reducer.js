import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../_constants';

export const authentication = function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true }

    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false }

    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }

  return state;
}
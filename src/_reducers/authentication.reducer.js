import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../_constants';

export const authentication = function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, loginError: '', isAuthenticated: true }

    case UNAUTH_USER:
      return { ...state, loginError: '', isAuthenticated: false }

    case AUTH_ERROR:
      return { ...state, loginError: action.payload };
  }

  return state;
}
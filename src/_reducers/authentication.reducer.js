import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  AUTH_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_LINK_SENT
} from '../_constants';

export const authentication = function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, isAuthenticated: true, authLoading: false, resetPasswordSuccess: false, resetLinkSent: false, loginError: '' }

    case UNAUTH_USER:
      return { ...state, isAuthenticated: false, authLoading: false, resetPasswordSuccess: false, resetLinkSent: false, loginError: '' }

    case AUTH_ERROR:
      return { ...state, isAuthenticated: false, authLoading: false, resetPasswordSuccess: false, resetLinkSent: false, loginError: action.payload };

    case AUTH_LOADING:
      return { ...state, isAuthenticated: false, authLoading: true, resetPasswordSuccess: false, resetLinkSent: false, loginError: '' }

    case RESET_PASSWORD_SUCCESS:
      return { ...state, isAuthenticated: false, authLoading: false, resetPasswordSuccess: true, resetLinkSent: false, loginError: '' }

    case RESET_LINK_SENT:
      return { ...state, isAuthenticated: false, authLoading: false, resetPasswordSuccess: false, resetLinkSent: true, loginError: '' }

    default:
      return state;
  }
}
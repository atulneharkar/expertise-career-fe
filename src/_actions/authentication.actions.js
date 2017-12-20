import { history } from '../_helpers';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  AUTH_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_LINK_SENT
} from '../_constants';

import { 
  authenticationService
} from '../_services';

export const authenticateUser = function(user, loginType, returnUrl = '') {
  const redirectUrl = (returnUrl) ? returnUrl : '/';
  return dispatch => {
    dispatch({ type: AUTH_LOADING });
    authenticationService.authenticateUser(user, loginType)
      .then(
        user => {
          dispatch({ type: AUTH_USER });
        	history.push(redirectUrl);
        },
        error => {
          dispatch(authError('Please enter a valid Username and Password'));
        }
      );
  };
}

export const logout = function() {
  return dispatch => {
    dispatch({ type: UNAUTH_USER });
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
  };
}

export const forgotPassword = function(user) {
  return dispatch => {
    dispatch({ type: AUTH_LOADING });
    authenticationService.forgotPassword(user)
      .then(
        user => {
          history.push(`/reset-password/${user.otp}/${user.userID}`);
          // dispatch({ type: RESET_LINK_SENT });
          // history.push('/login');
        },
        error => {
          dispatch(authError('This Email ID does not exist.'));
        }
      );
  };
}

export const resetPassword = function(user) {
  return dispatch => {
    dispatch({ type: AUTH_LOADING });
    authenticationService.resetPassword(user)
      .then(
        user => {
          dispatch({ type: RESET_PASSWORD_SUCCESS });
          setTimeout(function() {
            history.push("/login");
          }, 3000);
        },
        error => {
          dispatch(authError('Cannot connet to server. Please try again later.'));
        }
      );
  };
}

function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

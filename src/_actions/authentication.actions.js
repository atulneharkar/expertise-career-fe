import { history } from '../_helpers';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../_constants';

import { 
  authenticationService
} from '../_services';

export const authenticateUser = function(user) {
  return dispatch => {
    authenticationService.authenticateUser(user)
      .then(
        user => {
          dispatch({ type: AUTH_USER });
        	history.push("/");
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
    authenticationService.forgotPassword(user)
      .then(
        user => {
          history.push(`/reset-password/${user.otp}/${user.userID}`);
        },
        error => {
          dispatch(authError('Please enter a valid Email ID.'));
        }
      );
  };
}

export const resetPassword = function(user) {
  return dispatch => {
    authenticationService.resetPassword(user)
      .then(
        user => {
          history.push("/login");
        },
        error => {
          dispatch(authError('Please try again later.'));
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

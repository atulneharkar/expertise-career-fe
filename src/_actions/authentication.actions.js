import createHistory from 'history/createBrowserHistory';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../_constants';

import { 
  authenticationService
} from '../_services';

export const authenticateUser = function(user) {
  const history = createHistory();
  return dispatch => {
    authenticationService.authenticateUser(user)
      .then(
        user => {
          dispatch({ type: AUTH_USER });
        	history.push("/home");
        },
        error => {
          dispatch(authError('Please enter a valid Username and Password'));
        }
      );
  };
}

export const logout = function(user) {
  const history = createHistory();
  return dispatch => {
    authenticationService.logout(user)
      .then(
        user => {
          localStorage.removeItem('userToken');
          localStorage.removeItem('userInfo');
          history.push('/login');
        },
        error => {
          dispatch(authError('Unable to logout.'));
        }
      );
  };
}

export const forgotPassword = function(user) {
  const history = createHistory();
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
  const history = createHistory();
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

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

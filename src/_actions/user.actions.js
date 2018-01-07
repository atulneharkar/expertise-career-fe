import { history } from '../_helpers';

import {
  AUTH_USER,
  FETCH_USERS,
  FETCH_USER,
  USER_ERROR,
  USER_SUCCESS,
  USER_LOADING,
  FILE_SIZE_ERROR
} from '../_constants';

import { userService } from '../_services';

export const addUser = function(user) {
  const _user = user;
  return (dispatch) => {
    dispatch({ type: USER_LOADING });
    userService.addUser(user)
      .then(
        user => {
          if(_user.avatar) {
            dispatch(uploadProfilePicture(_user.avatar));
          } else {
            dispatch({ type: AUTH_USER });
            history.push("/");
          }
        },
        error => {
        	dispatch(userError('Unable to connect to server.'));
        }
      );
   };
}

export const getUserList = function() {
  return (dispatch) => {
    userService.getAllUsers()
      .then(
        users => {
          dispatch({ 
            type: FETCH_USERS,
            payload: users
          });
        },
        error => {
          dispatch(userError('Unable to connect to server.'));
        }
      );
   };
}

export const getUserById = function(userId) {
 return (dispatch) => {
    userService.getUserById(userId)
      .then(
        user => {
          dispatch({ 
            type: FETCH_USER,
            payload: user
          });
        },
        error => {
          dispatch(userError('Unable to connect to server.'));
        }
      );
   };
}

export const updateUser = function(userId, user) {
  const _user = user;
  return (dispatch) => {
    dispatch({ type: USER_LOADING });
    userService.updateUser(userId, user)
      .then(
        user => {
          if(_user.avatar) {
            dispatch(uploadProfilePicture(_user.avatar));
          } else if(_user.role || _user.status) {
            dispatch(getUserList());
          } else {
            dispatch({ type: USER_SUCCESS });
            history.push("/");
          }
        },
        error => {
          dispatch(userError('Unable to connect to server.'));
        }
      );
   };
}

function uploadProfilePicture(file) {
  return (dispatch) => {
    if(file[0].size > 5000000) {
      dispatch({ type: FILE_SIZE_ERROR });
    } else {
      let formData = new FormData();
      formData.append('avatar', file[0]);
      
      userService.setAvatar(formData)
        .then(
          user => {
            dispatch({ type: USER_SUCCESS });
            setTimeout(function() {
              history.push("/");
            }, 3000);
          },
          error => {
            dispatch(userError('Unable to connect to server.'));
          }
        );
    }
  };
}

function userError(error) {
  return {
    type: USER_ERROR,
    payload: error
  }
}
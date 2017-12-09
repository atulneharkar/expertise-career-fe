import { history } from '../_helpers';

import {
  AUTH_USER,
  FETCH_USERS,
  FETCH_USER,
  FETCH_INTEREST_LIST,
  USER_ERROR
} from '../_constants';

import { userService } from '../_services';

export const addUser = function(user) {
  const _user = user;
  return (dispatch) => {
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
    userService.updateUser(userId, user)
      .then(
        user => {
          if(_user.avatar) {
            dispatch(uploadProfilePicture(_user.avatar));
          } else {
            history.push("/users");
          }
        },
        error => {
          dispatch(userError('Unable to connect to server.'));
        }
      );
   };
}

export const getInterestOptionsList = function() {
  return (dispatch) => {
    // userService.getInterestOptionsList()
    //   .then(
    //     list => {
    //       dispatch({ 
    //         type: FETCH_INTEREST_LIST,
    //         payload: list
    //       });
    //     },
    //     error => {
    //       dispatch(userError('Unable to connect to server.'));
    //     }
    //   );
    const lists = userService.getInterestOptionsList();
    dispatch({ 
      type: FETCH_INTEREST_LIST,
      payload: lists
    }); 
   };
}

function uploadProfilePicture(file) {
  return (dispatch) => {
    let formData = new FormData();
    formData.append('avatar', file[0]);
    
    userService.setAvatar(formData)
      .then(
        user => {
          history.push("/");
        },
        error => {
          dispatch(userError('Unable to connect to server.'));
        }
      );
  };
}

function userError(error) {
  return {
    type: USER_ERROR,
    payload: error
  }
}
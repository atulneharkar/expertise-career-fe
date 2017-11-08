import {
  FETCH_USERS,
  FETCH_USER
} from '../_constants';

import { userService } from '../_services';

export const addUser = function(user) {
  return dispatch => {
    userService.addUser(user)
      .then(
        user => {
        	console.log(user);
        },
        error => {
        	console.log(error);
        }
      );
  };
}
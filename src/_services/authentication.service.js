import 'whatwg-fetch';

import { setRequestOption } from '../_helpers';
import { SERVER_URL } from '../_constants';

export const authenticationService = {
  authenticateUser,
  logout,
  forgotPassword,
  resetPassword
};

function authenticateUser(user) {
  return fetch(`${SERVER_URL}/user/login`, setRequestOption(user)).then((response) => {
    const token = response.headers.get('x-auth');
    if(token) {
      localStorage.setItem('userToken', token);
    }
    return response.json();
  }).then((userInfo) => {
      if(userInfo) {
       localStorage.setItem('userInfo', JSON.stringify(userInfo));
     }
     return userInfo;
  });
}

function logout(user) {
  
}

function forgotPassword(user) {
  return fetch(`${SERVER_URL}/user/forgot-password`, setRequestOption(user)).then((response) => response.json());
}

function resetPassword(user) {
  return fetch(`${SERVER_URL}/user/reset-password`, setRequestOption(user)).then((response) => response.json());
}
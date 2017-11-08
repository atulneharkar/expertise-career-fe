import 'whatwg-fetch';

import { authHeader } from '../_helpers';
import { SERVER_URL } from '../_constants';

export const userService = {
    addUser,
    // updateUser,
    // deleteUser,
    // getAllUsers,
    // getUserById,
    // setAvatar
};

function addUser(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${SERVER_URL}/user/create`, requestOptions).then(handleResponse);
}

// function updateUser(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch('/users/' + user.id, requestOptions).then(handleResponse);;
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function deleteUser(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch('/users/' + id, requestOptions).then(handleResponse);;
// }

// function getAllUsers() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch('/users', requestOptions).then(handleResponse);
// }

// function getUserById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch('/users/' + _id, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}
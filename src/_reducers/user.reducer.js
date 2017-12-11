import {
  FETCH_USERS,
  FETCH_USER,
  USER_ERROR
} from '../_constants';

const INITIAL_STATE = { all: [], interestList: [], userDetail: null };

export const user = function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, userError: '', all: action.payload }

    case FETCH_USER:
      return { ...state, userError: '', userDetail: action.payload }

    case USER_ERROR:
      return { ...state, userError: action.payload };

    default:
      return state;
  }
}

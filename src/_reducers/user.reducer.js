import {
  FETCH_USERS,
  FETCH_USER,
  FETCH_INTEREST_LIST,
  USER_ERROR
} from '../_constants';

const INITIAL_STATE = { all: [], interestList: [], userDetail: null };

export const user = function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, userError: '', all: action.payload }

    case FETCH_USER:
      return { ...state, userError: '', userDetail: action.payload }

    case FETCH_INTEREST_LIST:
      return { ...state, userError: '', interestList: action.payload }

    case USER_ERROR:
      return { ...state, userError: action.payload };
  }

  return state;
}

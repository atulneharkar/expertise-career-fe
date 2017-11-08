import {
  FETCH_USERS,
  FETCH_USER
} from '../_constants';

const INITIAL_STATE = { all: [], userDetail: null };

export const user = function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, all: action.payload }

    case FETCH_USER:
      return { ...state, userDetail: action.payload }
  }

  return state;
}

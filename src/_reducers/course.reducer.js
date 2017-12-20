import {
  FETCH_COURSES,
  FETCH_COURSE,
  COURSE_ERROR,
  COURSE_LOADING,
  FETCH_COURSE_CATEGORY,
  FETCH_COURSE_TYPE,
  FETCH_USERS
} from '../_constants';

const INITIAL_STATE = { all: [] };

export const course = function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_COURSES:
      return { ...state, all: action.payload, courseDetail: null, courseError: '', courseLoading: false }

    case FETCH_COURSE:
      return { ...state, courseDetail: action.payload, courseError: '', courseLoading: false }

    case FETCH_COURSE_CATEGORY:
      return { ...state, courseDetail: null, courseError: '', courseLoading: false, courseCategory: action.payload }

    case FETCH_COURSE_TYPE:
      return { ...state, courseDetail: null, courseError: '', courseLoading: false, courseType: action.payload }

    case FETCH_USERS:
      return { ...state, courseDetail: null, courseError: '', courseLoading: false, users: action.payload }

    case COURSE_ERROR:
      return { ...state, courseDetail: null, courseError: action.payload, courseLoading: false };

    case COURSE_LOADING:
      return { ...state, courseDetail: null, courseError: '', courseLoading: true };

    default:
      return state;
  }
}

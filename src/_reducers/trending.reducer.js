import {
  FETCH_TRENDINGS,
  FETCH_TRENDING,
  TRENDING_ERROR,
  TRENDING_LOADING,
  FETCH_TRENDING_CATEGORY
} from '../_constants';

const INITIAL_STATE = { all: [] };

export const trending = function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TRENDINGS:
      return { ...state, all: action.payload, trendingDetail: null, trendingError: '', trendingLoading: false }

    case FETCH_TRENDING:
      return { ...state, trendingDetail: action.payload, trendingError: '', trendingLoading: false }

    case FETCH_TRENDING_CATEGORY:
      return { ...state, trendingDetail: null, trendingError: '', trendingLoading: false, trendingCategory: action.payload }

    case TRENDING_ERROR:
      return { ...state, trendingDetail: null, trendingError: action.payload, trendingLoading: false };

    case TRENDING_LOADING:
      return { ...state, trendingDetail: null, trendingError: '', trendingLoading: true };

    default:
      return state;
  }
}

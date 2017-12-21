import { history } from '../_helpers';

import {
  FETCH_TRENDINGS,
  FETCH_TRENDING,
  TRENDING_ERROR,
  TRENDING_LOADING,
  FETCH_TRENDING_CATEGORY
} from '../_constants';

import { trendingService, commonService } from '../_services';

export const addTrending = function(trending) {
  const _trending = trending;
  return (dispatch) => {
    dispatch({ type: TRENDING_LOADING });
    trendingService.addTrending(trending)
      .then(
        trending => {
          if(_trending.avatar) {
            dispatch(uploadTrendingImage(_trending.avatar, trending._id));
          } else {
            history.push("/admin-dashboard#trending-list");
          }
        },
        error => {
        	dispatch(trendingError('Unable to connect to server.'));
        }
      );
   };
}

export const getTrendingList = function() {
  return (dispatch) => {
    trendingService.getAllTrendings()
      .then(
        trendings => {
          dispatch({ 
            type: FETCH_TRENDINGS,
            payload: trendings
          });
        },
        error => {
          dispatch(trendingError('Unable to connect to server.'));
        }
      );
   };
}

export const getTrendingById = function(trendingId) {
 return (dispatch) => {
    trendingService.getTrendingById(trendingId)
      .then(
        trending => {
          dispatch({ 
            type: FETCH_TRENDING,
            payload: trending
          });
        },
        error => {
          dispatch(trendingError('Unable to connect to server.'));
        }
      );
   };
}

export const removeTrending = function(trendingId) {
  return (dispatch) => {
    trendingService.removeTrending(trendingId)
      .then(
        trending => {
          dispatch(getTrendingList());
        },
        error => {
          dispatch(trendingError('Unable to connect to server.'));
        }
      );
   };
}

export const updateTrending = function(trendingId, trending) {
  const _trending = trending;
  return (dispatch) => {
    dispatch({ type: TRENDING_LOADING });
    trendingService.updateTrending(trendingId, trending)
      .then(
        trending => {
          if(_trending.avatar) {
            dispatch(uploadTrendingImage(_trending.avatar, trendingId));
          } else {
            history.push("/admin-dashboard#trending-list");
          }
        },
        error => {
          dispatch(trendingError('Unable to connect to server.'));
        }
      );
   };
}

export const getTrendingCategory = function() {
  return (dispatch) => {
    const lists = commonService.getCategory();
    dispatch({ 
      type: FETCH_TRENDING_CATEGORY,
      payload: lists
    }); 
   };
}

function uploadTrendingImage(file, trendingId) {
  return (dispatch) => {
    let formData = new FormData();
    formData.append('avatar', file[0]);
    
    trendingService.setTrendingImage(formData, trendingId)
      .then(
        trending => {
          history.push("/admin-dashboard#trending-list");
        },
        error => {
          dispatch(trendingError('Unable to connect to server.'));
        }
      );
  };
}

function trendingError(error) {
  return {
    type: TRENDING_ERROR,
    payload: error
  }
}
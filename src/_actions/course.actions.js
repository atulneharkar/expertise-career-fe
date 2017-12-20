import { history } from '../_helpers';

import {
  FETCH_COURSES,
  FETCH_COURSE,
  COURSE_ERROR,
  COURSE_LOADING,
  FETCH_COURSE_CATEGORY,
  FETCH_COURSE_TYPE,
  FETCH_USERS
} from '../_constants';

import { courseService, commonService } from '../_services';

export const addCourse = function(course) {
  const _course = course;
  return (dispatch) => {
    dispatch({ type: COURSE_LOADING });
    courseService.addCourse(course)
      .then(
        course => {
          if(_course.courseImage) {
            dispatch(uploadCourseImage(_course.courseImage));
          } else {
            history.push("/admin-dashboard#course-list");
          }
        },
        error => {
        	dispatch(courseError('Unable to connect to server.'));
        }
      );
   };
}

export const getCourseList = function() {
  return (dispatch) => {
    courseService.getAllCourses()
      .then(
        courses => {
          dispatch({ 
            type: FETCH_COURSES,
            payload: courses
          });
        },
        error => {
          dispatch(courseError('Unable to connect to server.'));
        }
      );
   };
}

export const getCourseById = function(courseId) {
 return (dispatch) => {
    courseService.getCourseById(courseId)
      .then(
        course => {
          dispatch({ 
            type: FETCH_COURSE,
            payload: course
          });
        },
        error => {
          dispatch(courseError('Unable to connect to server.'));
        }
      );
   };
}

export const updateCourse = function(courseId, course) {
  const _course = course;
  return (dispatch) => {
    dispatch({ type: COURSE_LOADING });
    courseService.updateCourse(courseId, course)
      .then(
        course => {
          if(_course.courseImage) {
            dispatch(uploadCourseImage(_course.courseImage));
          } else {
            history.push("/admin-dashboard#course-list");
          }
        },
        error => {
          dispatch(courseError('Unable to connect to server.'));
        }
      );
   };
}

export const getCourseCategory = function() {
  return (dispatch) => {
    const lists = commonService.getCategory();
    dispatch({ 
      type: FETCH_COURSE_CATEGORY,
      payload: lists
    }); 
   };
}

export const getCourseType = function() {
  return (dispatch) => {
    const lists = commonService.getCourseType();
    dispatch({ 
      type: FETCH_COURSE_TYPE,
      payload: lists
    }); 
   };
}

export const getUsers = function() {
  return (dispatch) => {
    const lists = commonService.getUsers();
    dispatch({ 
      type: FETCH_USERS,
      payload: lists
    }); 
   };
}

function uploadCourseImage(file) {
  return (dispatch) => {
    let formData = new FormData();
    formData.append('courseImage', file[0]);
    
    courseService.setCourseImage(formData)
      .then(
        course => {
          history.push("/admin-dashboard#course-list");
        },
        error => {
          dispatch(courseError('Unable to connect to server.'));
        }
      );
  };
}

function courseError(error) {
  return {
    type: COURSE_ERROR,
    payload: error
  }
}
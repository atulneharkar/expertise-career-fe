import 'whatwg-fetch';

import { setHeader } from '../_helpers';
import { SERVER_URL } from '../_constants';

export const courseService = {
    addCourse,
    updateCourse,
    getAllCourses,
    getCourseById,
    setCourseImage,
    removeCourse
};

function addCourse(course) {
  return fetch(`${SERVER_URL}/course/create`, setHeader('POST', course, true)).then((response) => response.json());
}

function updateCourse(courseId, course) {
  return fetch(`${SERVER_URL}/course/${courseId}`, setHeader('PUT', course, true)).then((response) => response.json());
}

function getAllCourses() {
  return fetch(`${SERVER_URL}/course/list/all`, setHeader('GET', null, true)).then((response) => response.json());
}

function getCourseById(courseId) {
  return fetch(`${SERVER_URL}/course/${courseId}`, setHeader('GET', null, true)).then((response) => response.json());
}

function removeCourse(courseId) {
  return fetch(`${SERVER_URL}/course/${courseId}`, setHeader('DELETE', null, true)).then((response) => response.json());
}

function setCourseImage(data, courseId) {
  return fetch(`${SERVER_URL}/course/courseImage/${courseId}`, setHeader('POST', data, true, true)).then((response) => response.json());
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';

class CourseListTableView extends Component {
	componentWillMount() {
		this.props.getCourseList();
  }

  handledelete(courseId) {
    this.props.removeCourse(courseId);
  }

  renderCoursePicture(avatar) {
    if(avatar) {
      return (
        <img alt="Course Picture" src={avatar} width="50" height="50" />
      );
    } else {
      return (
        <img alt="Course Picture" src="default.img" width="50" height="50" />
      );
    }
  }

  renderCourses() {
    return this.props.courseData.map((course) => {
      return (
        <tr key={course._id}>
          <td>{this.renderCoursePicture(course.courseImage)}</td>
          <td>{course.title}</td>
          <td>{course.description}</td>
          <td>{course.courseType}</td>
          <td>{course.courseCategory}</td>
          <td>{course.courseDate}</td>
          <td>{course.slot}</td>
          <td>{course.webinarLink}</td>
          <td>{course.courseContentLink}</td>
          <td>{course.registeredUsers}</td>
          <td>{course.author.name}</td>
          <td><Link to={`/edit-course/${course._id}`}>Edit</Link></td>
          <td><span onClick={() => this.handledelete(course._id)}>Delete</span></td>
        </tr>
      );
    });
  }

  renderCourseListTemplate() {
  	if(this.props.courseData.length) {
	  	return(
	  		<table>
	        <thead>
	          <tr>
	            <td></td>
	            <td>Title</td>
	            <td>Description</td>
	            <td>Course Type</td>
	            <td>Category</td>
	            <td>Course Date</td>
	            <td>Slots</td>
	            <td>Webinar Link</td>
	            <td>Course Content Link</td>
	            <td>Registered Users</td>
              <td>Author</td>
	            <td>Edit</td>
	            <td>Delete</td>
	          </tr>
	        </thead>
	        <tbody>
	          {this.renderCourses()}
	        </tbody>
	      </table>
	  	);
    } else {
    	return (
    		<p>No Course Found.</p>
    	);
    }
  }

  render() {

		return (
			<div>
			  <Link to="/create-course">Create Course</Link>
        {this.renderCourseListTemplate()}
      </div>
		);
  }
}

const mapStateToProps = (state) => ({
  courseData: state.course.all
});

export default connect(
  mapStateToProps,
  actions
)(CourseListTableView);

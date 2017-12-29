import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';
import AdminSubNav from '../AdminDashboard/AdminSubNav';

class CourseListTableView extends Component {
	componentWillMount() {
		this.props.getCourseList();
    this.props.getUsers();
  }

  handledelete(courseId) {
    this.props.removeCourse(courseId);
  }

  handleAssignCourse(event) {
    const courseId = event.target.getAttribute("data-course-id");
    const userId = event.target.value;
    this.props.userCourse(courseId, userId, 'add');
  }

  handleRemoveAssignedCourse(courseId, userId) {
    this.props.userCourse(courseId, userId, 'remove');
  }

  renderRegisteredUsers(users, courseId) {
    if(users) {
      let index = 0;
      return users.map((user) => {
        return (
          <p key={index++}>{user.name} <span onClick={() => this.handleRemoveAssignedCourse(courseId, user._id)}>x</span></p>
        );
      });
    }
  }

  renderCoursePicture(avatar) {
    if(avatar) {
      return (
        <img alt="Course pic" src={avatar} width="50" height="50" />
      );
    } else {
      return (
        <img alt="Course pic" src="default.img" width="50" height="50" />
      );
    }
  }

  renderUsersOption() {
    if(this.props.users) {
      let index = 0;
      return this.props.users.map((user) => {
        return (
          <option key={index++} value={user.value}>{user.label}</option>
        );
      });
    }
  }

  renderAssignCourse(courseId) {
    return(
      <select 
        data-course-id={courseId}
        onChange={(e) => this.handleAssignCourse(e)}>
        <option>Select User</option>
        {this.renderUsersOption()}
      </select>
    );
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
          <td>{course.coursePrice}</td>
          <td>
            {this.renderRegisteredUsers(course.registeredUsers, course._id)}
            <div>
              {this.renderAssignCourse(course._id)}
            </div>
          </td>
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
        <div className="table-responsive">
  	  		<table className="table table-striped">
  	        <thead>
  	          <tr>
  	            <th></th>
  	            <th>Title</th>
  	            <th>Description</th>
  	            <th>Course Type</th>
  	            <th>Category</th>
  	            <th>Course Date</th>
  	            <th>Slots</th>
  	            <th>Webinar Link</th>
  	            <th>course Price</th>
  	            <th>Registered Users</th>
                <th>Author</th>
  	            <th>Edit</th>
  	            <th>Delete</th>
  	          </tr>
  	        </thead>
  	        <tbody>
  	          {this.renderCourses()}
  	        </tbody>
  	      </table>
        </div>
	  	);
    } else {
    	return (
    		<p>No Course Found.</p>
    	);
    }
  }

  render() {

		return (
      <div className="admin-dashboard-wrapper wrapper">
        <AdminSubNav />
  			<div className="course-list">
          <p className="list-title">
            Course List
          </p>
          <div className="create-course-link">
  			    <Link to="/create-course">Create Course</Link>
          </div>
          {this.renderCourseListTemplate()}
        </div>
      </div>
		);
  }
}

const mapStateToProps = (state) => ({
  courseData: state.course.all,
  users: state.course.users
});

export default connect(
  mapStateToProps,
  actions
)(CourseListTableView);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';

class CourseDetails extends Component {
	componentWillMount() {
		const courseId = this.props.match.params.courseId;
		this.props.getCourseById(courseId);
  }

  renderCourseDetailTemplate() {
  	let course = this.props.courseData;
  	if(course) {
	  	return (
      	<div>
      	  <Link to="/">Back</Link>
      		<img alt="Course Picture" src={course.courseImage} width="100"/>
      		<p>{course.title}</p>
      		<p>{course.courseDate}</p>
          <p>{course.courseType}</p>
          <p>{course.courseCategory}</p>
          <p>{course.courseDate}</p>
          <p>{course.slot}</p>
          <p>{course.webinarLink}</p>
          <p>{course.courseContentLink}</p>
          <p>{course.registeredUsers}</p>
          <p>{course.author.name}</p>
      	</div>
      );
    } else {
    	return (
    	  <div>
	    		<p>We have no course active currently.</p>
	    		<p>For consulting <Link to="/contact-us">Contact Us</Link></p>
    		</div>
    	);
    }
  }

  render() {

		return (
			<div>
        {this.renderCourseDetailTemplate()}
      </div>
		);
  }
}

const mapStateToProps = (state) => ({
  courseData: state.course.courseDetail
});

export default connect(
  mapStateToProps,
  actions
)(CourseDetails);


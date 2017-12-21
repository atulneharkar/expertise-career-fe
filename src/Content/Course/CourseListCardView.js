import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';

class CourseListCardView extends Component {
	componentWillMount() {
		this.props.getCourseList();
  }

  renderCourseCardTemplate() {
  	if(this.props.courseData.length) {
	  	return this.props.courseData.map((course) => {
	      return (
	      	<div>
	      	  <Link to={`/webinar/${course._id}`}>
		      		<img alt="Course Picture" src={course.courseImage} width="100"/>
		      		<p>{course.title}</p>
		      		<p>{course.courseDate}</p>
	      		</Link>
	      	</div>
	      );
	    });
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
			  <h2>Webinar Courses</h2>
        {this.renderCourseCardTemplate()}
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
)(CourseListCardView);

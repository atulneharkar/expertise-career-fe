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
	      	<div key={course._id} className="course-card col-xs-4 col-sm-4 col-lg-3">
	      	  <Link to={`/webinar/${course._id}`}>
		      		<img alt="Course pic" src={course.courseImage} />
		      		<div className="course-info">
			      		<p className="course-type">{course.courseType}</p>
			      		<p className="course-title">{course.title}</p>
			      		<p className="course-author">with {course.author.name}</p>
			      		<div className="clearfix">
			      		  <p className="course-date">{course.courseDate}</p>
			      		  <p className="course-price">Rs {course.coursePrice}</p>
			      		</div>
		      		</div>
	      		</Link>
	      	</div>
	      );
	    });
    } else {
    	return (
    	  <div className="no-course-wrapper">
	    		<p>We are in a process of creating webinars. Stay tuned!</p>
	    		<p>For personal coaching <Link to="/contact-us">Contact Us</Link>.</p>
    		</div>
    	);
    }
  }

  render() {

		return (
			<div className="wrapper course-card-list clearfix">
			  <h2>Webinars / Sessions</h2>
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

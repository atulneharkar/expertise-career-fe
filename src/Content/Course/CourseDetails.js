import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

import * as actions from '../../_actions';
import AuthorInfo from './AuthorInfo';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const WhatsappIcon = generateShareIcon('whatsapp');

class CourseDetails extends Component {
	componentWillMount() {
		const courseId = this.props.match.params.courseId;
		this.props.getCourseById(courseId);
  }

  renderWebinarTitle() {
    const course = this.props.courseData;
    if(course) {
      return (
        <div className="webinar-title-sub-wrapper wrapper">
          <h2 className="course-title">{course.title}</h2>
          <div className="author-name-wrapper">
            <p className="highlight-text">Learn the best way to become a # 1 Uxer within no time!</p>
            <p className="author-name">With Mahesh Shinde</p>
            <p className="author-designation">Sr. UX Designer (6+ Years of UX Design Experience)</p>
          </div>
        </div>
      );
    }
  }

  renderSyllabus(syllabus) {
    let index = 0;
    return syllabus.split(';').map((list) => {
      return (
        <li key={index++}>{list}</li>
      );
    });
  }

  renderCourseDetailTemplate() {
  	const course = this.props.courseData;
  	if(course) {
      const shareUrl = `http://localhost:3001/webinar/${course._id}`;
      const title = 'Expertise career - Learn Explore Build';
	  	return (
      	<div>
      		<img alt="Course Picture" src={course.courseImage} width="100"/>
          <div className="webinar-date-time clearfix">
      		  <p><span>Webinar date:</span> {course.courseDate}</p>
            <p><span>Webinar time:</span> {course.slot}</p>
          </div>
          <div className="course-price clearfix">
            <p>Rs {course.coursePrice} /-</p>
            <Link to="" className="register-course-btn">Take Webinar</Link>
          </div>
          <div className="course-topics">
            <h3>Topics Covered</h3>
            <ul>{this.renderSyllabus(course.description)}</ul>
          </div>

          <div className="social-share-icons clearfix">
            <div>
              <FacebookShareButton
                url={shareUrl}
                title={title}>
                <FacebookIcon
                  size={32}
                  round />
              </FacebookShareButton>
            </div>

            <div>
              <TwitterShareButton
                url={shareUrl}
                title={title}>
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>
            </div>

            <div>
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: ">
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>

            <div>
              <GooglePlusShareButton
                url={shareUrl}>
                <GooglePlusIcon
                  size={32}
                  round />
              </GooglePlusShareButton>
            </div>

            <div>
              <LinkedinShareButton
                url={shareUrl}
                title={title}
                windowWidth={750}
                windowHeight={600}>
                <LinkedinIcon
                  size={32}
                  round />
              </LinkedinShareButton>
            </div>

          </div>
      	</div>
      );
    } else {
    	return (
    	  <div className="course-details-wrapper">
	    		<p>We are facing some issues fetching data. Please try again later.</p>
    		</div>
    	);
    }
  }

  render() {
		return (
      <div>
        <div className="webinar-title-wrapper">
          {this.renderWebinarTitle()}
        </div>
  			<div className="course-details-wrapper wrapper">
          <Link to="/" className="course-list-link">Back to Course List</Link>
          <div className="clearfix webinar-info-wrapper">
            <div className="webinar-details-wrapper mobile-visible">
              {this.renderCourseDetailTemplate()}
            </div>
            <div className="about-author-main-wrapper">
              <AuthorInfo />
            </div>
            <div className="webinar-details-wrapper mobile-hide">
              {this.renderCourseDetailTemplate()}
            </div>
          </div>
        </div>
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


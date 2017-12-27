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
        <div>
          <h2>{course.title}</h2>
          <div>
            <p>Learn the best way to become a # 1 Uxer within no time!</p>
            <p>With Mahesh Shinde</p>
            <p>Sr. UX Designer (6+ Years of UX Design Experience)</p>
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
      		<p>{course.courseDate}</p>
          <p>{course.courseType}</p>
          <p>{course.courseCategory}</p>
          <p>{course.courseDate}</p>
          <p>{course.slot}</p>
          <p>{course.webinarLink}</p>
          <p>{course.coursePrice}</p>
          <ul>{this.renderSyllabus(course.description)}</ul>

          <div className="social-share-icons">
            <FacebookShareButton
              url={shareUrl}
              title={title}>
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareUrl}
              title={title}>
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>

            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: ">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <GooglePlusShareButton
              url={shareUrl}>
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>

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
			<div className="course-details-wrapper wrapper">
        <Link to="/">Back</Link>
        <div className="webinar-title-wrapper">
          {this.renderWebinarTitle()}
        </div>
        <div className="clearfix">
          <div className="about-author-wrapper">
            <AuthorInfo />
          </div>
          <div className="webinar-details-wrapper">
            {this.renderCourseDetailTemplate()}
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


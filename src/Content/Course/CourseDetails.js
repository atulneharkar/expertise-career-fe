import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

import * as actions from '../../_actions';

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

  renderCourseDetailTemplate() {
  	const course = this.props.courseData;
  	if(course) {
      const shareUrl = `http://localhost:3001/webinar/${course._id}`;
      const title = 'Expertise career - Learn Explore Build';
	  	return (
      	<div>
      	  <Link to="/">Back</Link>

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

      		<img alt="Course Picture" src={course.courseImage} width="100"/>
      		<p>{course.title}</p>
      		<p>{course.courseDate}</p>
          <p>{course.courseType}</p>
          <p>{course.courseCategory}</p>
          <p>{course.courseDate}</p>
          <p>{course.slot}</p>
          <p>{course.webinarLink}</p>
          <p>{course.coursePrice}</p>
          <p>{course.registeredUsers}</p>
          <p>{course.author.name}</p>
      	</div>
      );
    } else {
    	return (
    	  <div>
	    		We are facing some issues fetching data. Please try again later.
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


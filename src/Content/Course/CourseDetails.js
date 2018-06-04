import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

import * as actions from '../../_actions';
import AuthorInfo from './AuthorInfo';
import CourseRegister from './CourseRegister';
import { history } from '../../_helpers';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const WhatsappIcon = generateShareIcon('whatsapp');

class CourseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseRegister: false,
      courseRegisterStatus: false,
      courseId: '',
      userId: ''
    };
  }

	componentWillMount() {
		const courseId = this.props.match.params.courseId || '';
		this.props.getCourseById(courseId);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userId = (userInfo) ? userInfo._id : '';

    this.setState({ courseId, userId });

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.courseData) {
      this.checkIfCourseRegistered(nextProps.courseData);
    }
  }

  //logic to check is course already registered
  checkIfCourseRegistered(courseData) {
    if(courseData) {
      (courseData.registeredUsers).map((user) => {
        if(user._id === (this.state.userId)) {
          this.setState({ courseRegisterStatus: true });
        }
      });
    }
  }

  toggleCourseRegister(courseRegister) {
    if(this.props.authenticated) {
      //this.setState({ courseRegister });

      this.setState({ courseRegisterStatus: true });

      //logic to add course to user list
      this.props.userCourse(this.state.courseId, this.state.userId);

    } else {
      history.push(`/login?redirectUrl=/webinar/${this.state.courseId}`);
    }
  }

  renderWebinarTitle() {
    const course = this.props.courseData;
    if(course) {
      return (
        <div className="webinar-title-sub-wrapper wrapper">
          <h2 className="course-title">{course.title}</h2>
          <div className="author-name-wrapper">
            <p className="highlight-text">Learn the best way to become #1 Uxer within no time!</p>
            <p className="author-name">With Mahesh Shinde</p>
            <p className="author-designation">Sr. UX Designer (6+ Years of UX Design Experience)</p>
          </div>
        </div>
      );
    }
  }

  renderSyllabus(syllabus) {
    let index = 0;
    return syllabus.split('&;').map((list) => {
      return (
        <li key={index++}>{list}</li>
      );
    });
  }

  renderCourseDetailTemplate() {
  	const course = this.props.courseData;
  	if(course) {
      const shareUrl = `https://www.skillunfold.com/webinar/${course._id}`;
      const title = 'Skill Unfold - Learn Explore Build';
	  	return (
      	<div>
      		<img alt="Course pic" src={course.courseImage} width="100"/>
          <div className="webinar-date-time clearfix">
      		  <p><span>Webinar date:</span> {course.courseDate}</p>
            <p><span>Webinar time:</span> {course.slot}</p>
          </div>
          <div className="course-price clearfix">
            <p>FREE</p>
            <span onClick={() => this.toggleCourseRegister(true)} className={this.state.courseRegisterStatus ? 'hide' : 'register-course-btn add-cursor-pointer'}>Register</span>
            <span className={this.state.courseRegisterStatus ? 'register-course-btn' : 'hide'}>Already Registered</span>
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

        <div className={this.state.courseRegister ? 'course-register-overlay show-overlay-course-register' : 'course-register-overlay'} 
        onClick={() => this.toggleCourseRegister(false)}></div>
        <div className={this.state.courseRegister ? 'course-register-wrapper show-course-register' : 'course-register-wrapper'}>
          <CourseRegister handleRegisterModalClose={(userResponse) => this.toggleCourseRegister(userResponse)} />
        </div>

      </div>
		);
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authentication.isAuthenticated,
  courseData: state.course.courseDetail
});

export default connect(
  mapStateToProps,
  actions
)(CourseDetails);


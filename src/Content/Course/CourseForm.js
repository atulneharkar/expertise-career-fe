import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../_actions';
import { required, history } from '../../_helpers';
import { renderInputField, renderSelectField, renderFileInputField, renderTextAreaField } from '../../_components';

class CourseForm extends Component {
  constructor(props) {
		super(props);

		this.state = {
			submitButtonText: 'Save',
			courseId: '',
			courseData: {
				title: '',
				description: '',
				courseType: '',
				courseCategory: '',
				courseDate: '',
				slot: '',
				webinarLink: '',
				coursePrice: '',
				author: ''
			}
		}
	}

	componentWillMount() {
		this.props.getCourseCategory();
		this.props.getCourseType();
		this.props.getUsers();

		const courseId = this.props.match.params.courseId;
    if(this.props.authenticated && !courseId) {
      history.push('/');
    }

    if(courseId) {
    	this.setState({ courseId, submitButtonText: 'Update' });
    	this.props.getCourseById(courseId);
    }
  }

  componentWillReceiveProps(nextProps) {
  	if(nextProps.courseData) {
    	this.setState({ courseData: nextProps.courseData });
    }
  }

	renderQueryResponse() {
		if(this.props.loading) {
			return <div className="loading">loading</div>;
		} else if(this.props.errorMessage) {
			return <div className="error-message">{this.props.errorMessage}</div>;
		}
	}

  handleInputChange(event, controlName = undefined) {
  	let target;
    let value;
    let key;

  	if(!controlName) {
  		target = event.target;
	    value = target.type === 'checkbox' ? target.checked : target.value;
	    key = target.name;
  	} else {
  		key = controlName;
  		value = event.value;
  	}

    const courseData = this.state.courseData;
    courseData[key] = value;
    this.setState(courseData);
  }

	handleFormSubmit(props) {
		if(this.state.courseData.courseCategory) {
			props['courseCategory'] = this.state.courseData.courseCategory;
		}
		if(this.state.courseData.courseType) {
			props['courseType'] = this.state.courseData.courseType;
		}
		if(this.state.courseData.author) {
			props['author'] = this.state.courseData.author;
		}
    if(this.state.courseId) {
      this.props.updateCourse(this.state.courseId, props);
    } else {
      this.props.addCourse(props);
    }
  }

  render() {
		const { handleSubmit } = this.props;

		return (
		  <div className="course-form">
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				  <p className="form-title">Course Add / Update</p>
					<Field
		        name="title"
		        type="text"
		        component={renderInputField}
		        label="Title"
		        setValue={this.state.courseData.title}
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={this.state.courseData.title ? null : [required]}
		      />
		      <Field
		        name="description"
		        type="text"
		        component={renderTextAreaField}
		        label="Description"
		        setValue={this.state.courseData.description}
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={this.state.courseData.description ? null : [required]}
		      />
		      <Field
		        name="courseType"
		        component={renderSelectField}
		        label="Course Type"
		        optionList={this.props.courseType}
		        setValue={this.state.courseData.courseType}
		        onValueChange={(e) => this.handleInputChange(e, 'courseType')}
		        // validate={[required]}
		      />
		      <Field
		        name="courseCategory"
		        component={renderSelectField}
		        label="Category"
		        optionList={this.props.courseCategory}
		        setValue={this.state.courseData.courseCategory}
		        onValueChange={(e) => this.handleInputChange(e, 'courseCategory')}
		        // validate={[required]}
		      />
		      <Field
		        name="courseDate"
		        type="date"
		        component={renderInputField}
		        label="Course Date"
		        setValue={this.state.courseData.courseDate}
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={this.state.courseData.courseDate ? null : [required]}
		      />
		      <Field
		        name="slot"
		        type="text"
		        component={renderInputField}
		        label="Slot"
		        setValue={this.state.courseData.slot}
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={this.state.courseData.slot ? null : [required]}
		      />
		      <Field
		        name="webinarLink"
		        type="text"
		        component={renderInputField}
		        label="Webinar Link"
		        setValue={this.state.courseData.webinarLink}
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={this.state.courseData.webinarLink ? null : [required]}
		      />
		      <Field
		        name="coursePrice"
		        type="text"
		        component={renderInputField}
		        label="Course Price"
		        setValue={this.state.courseData.coursePrice}
		        onValueChange={(e) => this.handleInputChange(e)}
		        //validate={[required]}
		      />
		      <Field
		        name="author"
		        component={renderSelectField}
		        label="Author"
		        optionList={this.props.users}
		        setValue={this.state.courseData.author._id}
		        onValueChange={(e) => this.handleInputChange(e, 'author')}
		        // validate={[required]}
		      />
		      <Field
		        name="avatar"
	          component={renderFileInputField}
	          label="Course Photo"
	        />
		      <div>
		        <button type="submit" className="submit-btn-link">{this.state.submitButtonText}</button>

		        <div className="admin-dashboard-link">
		          Back to <Link to="/admin/courses">Admin Dashboard</Link>
		        </div>
		      </div>

		      {this.renderQueryResponse()}
				</form>
			</div>
		);
  }
}

const mapStateToProps = (state) => ({
	courseData: state.course.courseDetail,
  errorMessage: state.course.courseError,
  loading: state.course.courseLoading,
  courseCategory: state.course.courseCategory,
  courseType: state.course.courseType,
  users: state.course.users
});

CourseForm = connect(
  mapStateToProps,
  actions
)(CourseForm);

export default reduxForm({
  form: 'CourseForm'
})(CourseForm);

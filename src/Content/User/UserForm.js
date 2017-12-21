import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../_actions';
import { required, email, phoneNumber, history } from '../../_helpers';
import { renderInputField, renderFileInputField } from '../../_components';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			submitButtonText: 'Register',
			userId: '',
			userData: {
				name: '',
				phone: '',
				email: ''
			}
		}
	}

	renderUserResponse() {
		if(this.props.loading) {
			return <div className="loading">loading</div>;
		} else if(this.props.errorMessage) {
			return <div className="error-message">{this.props.errorMessage}</div>;
		} else if(this.props.successMessage) {
			if(this.state.userId) {
				return <div className="success-message">User updated successfully!</div>;
			} else {
				return <div className="success-message">User registered successfully!</div>;
			}
		} 
	}

	componentWillMount() {
		const userId = this.props.match.params.userId;
    if(this.props.authenticated && !userId) {
      history.push('/');
    }

    if(userId) {
    	this.setState({ userId, submitButtonText: 'Update' });
    	this.props.getUserById(userId);
    }
  }

  componentWillReceiveProps(nextProps) {
  	if(nextProps.userData) {
    	this.setState({ userData: nextProps.userData });
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
    

    const userData = this.state.userData;
    userData[key] = value;

    this.setState(userData);
  }

	handleFormSubmit(props) {
    if(this.props.authenticated) {
      this.props.updateUser(this.state.userId, props);
    } else {
      this.props.addUser(props);
    }
  }

  render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Field
	        name="name"
	        type="text"
	        component={renderInputField}
	        label="Name"
	        setValue={this.state.userData.name}
	        onValueChange={(e) => this.handleInputChange(e)}
	        validate={this.state.userData.name ? null : [required]}
	      />
	      <Field
	        name="phone"
	        type="number"
	        component={renderInputField}
	        label="Phone"
	        setValue={this.state.userData.phone}
	        onValueChange={(e) => this.handleInputChange(e)}
	        validate={this.state.userData.phone ? [phoneNumber] : [required, phoneNumber]}
	      />
	      <Field
	        name="email"
	        type="text"
	        component={renderInputField}
	        label="Email"
	        setValue={this.state.userData.email}
	        onValueChange={(e) => this.handleInputChange(e)}
	        validate={this.state.userData.email ? null : [required, email]}
	      />
	      <Field
	        name="password"
	        type="password"
	        component={renderInputField}
	        label="Password"
	        validate={this.state.userId ? null : [required]}
	      />
	      <Field
	        name="confirmPassword"
	        type="password"
	        component={renderInputField}
	        label="Confirm Password"
	        validate={this.state.userId ? null : [required]}
	      />
	      <Field
	        name="avatar"
          component={renderFileInputField}
          label="Profile Picture"
        />
	      <div>
	        <button type="submit">{this.state.submitButtonText}</button>
	        <Link to="/login">Cancel</Link>
	      </div>

	      {this.renderUserResponse()}
			</form>
		);
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.userError,
  successMessage: state.authentication.userSuccess,
  authenticated: state.authentication.isAuthenticated,
  userData: state.user.userDetail,
  interestList: state.user.interestList
});

UserForm = connect(
  mapStateToProps,
  actions
)(UserForm);

export default reduxForm({
  form: 'UserForm'
})(UserForm);
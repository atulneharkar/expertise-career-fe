import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../_actions';
import { required } from '../_helpers';
import { renderInputField, renderHiddenInputField } from '../_components';

class ResetPasswordForm extends Component {
	
	componentWillMount() {
  	this.props.change('otp', this.props.match.params.otp); 
		this.props.change('userId', this.props.match.params.userId);
  }

  renderAuthResponse() {
		if(this.props.loading) {
			return <div class="loading">loading</div>;
		} else if(this.props.errorMessage) {
			return <div class="error-message">{this.props.errorMessage}</div>;
		} else if(this.props.resetPasswordSuccess) {
			return <div class="error-message">Password reset successfully!</div>;
		} 
	}

	handleFormSubmit(props) {
		this.props.resetPassword(props);
  }

  render() {
		const { handleSubmit } = this.props; 

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	      <Field
	        name="password"
	        type="password"
	        component={renderInputField}
	        label="Password"
	        validate={[required]}
	      />
	      <Field
	        name="confirmPassword"
	        type="password"
	        component={renderInputField}
	        label="Confirm Password"
	        validate={[required]}
	      />
	      <Field
	        name="otp"
	        type="hidden"
	        component={renderHiddenInputField}
	      />
	      <Field
	        name="userId"
	        type="hidden"
	        component={renderHiddenInputField}
	      />
	      <div>
	        <button type="submit">Reset</button>
	        <Link to="/login">Cancel</Link>
	      </div>

	      {this.renderAuthResponse()}
			</form>
		);
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.loginError,
  loading: state.authentication.authLoading,
  resetPasswordSuccess: state.authentication.resetPasswordSuccess,
});

ResetPasswordForm = connect(
  mapStateToProps,
  actions
)(ResetPasswordForm);

export default reduxForm({
  form: 'ResetPasswordForm'
}, null)(ResetPasswordForm);
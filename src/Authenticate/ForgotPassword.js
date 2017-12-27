import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../_actions';
import { required, email } from '../_helpers';
import { renderInputField } from '../_components';

class ForgotPasswordForm extends Component {

	renderAuthResponse() {
		if(this.props.loading) {
			return <div class="loading">loading</div>;
		} else if(this.props.resetLinkSent) {
			return <div class="success-message">Link to reset password has been sent to your Email Id.</div>;
		} else if(this.props.errorMessage) {
			return <div class="error-message">{this.props.errorMessage}</div>;
		} 
	}

	handleFormSubmit(props) {
		this.props.forgotPassword(props);
  }

  render() {
		const { handleSubmit } = this.props;

		return (
		  <div className="forgot-pwd-form">
			  <h2 className="form-text">
			  	Email with reset password link will be sent to your registered Email Id.
			  </h2>
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				  <p className="form-title">Forgot Password</p>
		      <Field
		        name="email"
		        type="text"
		        component={renderInputField}
		        label="Email"
		        validate={[required, email]}
		      />
		      <div>
		        <button type="submit" className="submit-btn-link">Send Link</button>
		        
		        <div className="login-btn-link">
		          Back to <Link to="/login">Login</Link>
		        </div>
		      </div>

		      {this.renderAuthResponse()}
				</form>
			</div>
		);
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.loginError,
  resetLinkSent: state.authentication.resetLinkSent,
  loading: state.authentication.authLoading
});

ForgotPasswordForm = connect(
  mapStateToProps,
  actions
)(ForgotPasswordForm);

export default reduxForm({
  form: 'ForgotPasswordForm'
}, null)(ForgotPasswordForm);
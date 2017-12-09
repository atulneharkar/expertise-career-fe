import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import * as actions from '../_actions';
import { required } from '../_helpers';
import { renderInputField, renderHiddenInputField } from '../_components';

class ResetPasswordForm extends Component {
	handleFormSubmit(props) {
		this.props.resetPassword(props);
  }

  componentWillMount() {
  	this.props.change('otp', this.props.match.params.otp); 
		this.props.change('userId', this.props.match.params.userId);
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
			</form>
		);
  }
}

export default reduxForm({
  form: 'ResetPasswordForm'
}, null, actions)(ResetPasswordForm);
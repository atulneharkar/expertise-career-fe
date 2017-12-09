import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import * as actions from '../_actions';
import { required, email } from '../_helpers';
import { renderInputField } from '../_components';

class ForgotPasswordForm extends Component {
	handleFormSubmit(props) {
		this.props.forgotPassword(props);
  }

  render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	      <Field
	        name="email"
	        type="text"
	        component={renderInputField}
	        label="Email"
	        validate={[required, email]}
	      />
	      <div>
	        <button type="submit">Send Link</button>
	        <Link to="/login">Cancel</Link>
	      </div>
			</form>
		);
  }
}

export default reduxForm({
  form: 'ForgotPasswordForm'
}, null, actions)(ForgotPasswordForm);
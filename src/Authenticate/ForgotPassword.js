import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { forgotPassword } from '../_actions';
import { required, email } from '../_helpers';
import { renderInputTextField } from '../_components';

class ForgotPasswordForm extends Component {
	handleFormSubmit(props) {
		const { dispatch } = this.props;
		dispatch(forgotPassword(props));
  }

  render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	      <Field
	        name="email"
	        type="text"
	        component={renderInputTextField}
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
}, null, forgotPassword)(ForgotPasswordForm);
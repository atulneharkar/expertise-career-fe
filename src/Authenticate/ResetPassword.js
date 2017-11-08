import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { resetPassword } from '../_actions';
import { required } from '../_helpers';
import { renderInputTextField, renderHiddenInputTextField } from '../_components';

class ResetPasswordForm extends Component {
	handleFormSubmit(props) {
		const { dispatch } = this.props;
		dispatch(resetPassword(props));
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
	        component={renderInputTextField}
	        label="Password"
	        validate={[required]}
	      />
	      <Field
	        name="confirmPassword"
	        type="password"
	        component={renderInputTextField}
	        label="Confirm Password"
	        validate={[required]}
	      />
	      <Field
	        name="otp"
	        type="hidden"
	        component={renderHiddenInputTextField}
	      />
	      <Field
	        name="userId"
	        type="hidden"
	        component={renderHiddenInputTextField}
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
}, null, resetPassword)(ResetPasswordForm);
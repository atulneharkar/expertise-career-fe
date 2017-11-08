import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { authenticateUser } from '../_actions';
import { required, email } from '../_helpers';
import { renderInputTextField } from '../_components';

class LoginForm extends Component {

	componentWillMount() {
    if (this.props.authenticated) {
      this.context.router.push('/');
    }
  }

	handleFormSubmit(props) {
		const { dispatch } = this.props;
		dispatch(authenticateUser(props));
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="error">{this.props.errorMessage}</div>
      );
    }
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
	      <Field
	        name="password"
	        type="password"
	        component={renderInputTextField}
	        label="Password"
	        validate={[required]}
	      />
	      <div>
	        <button type="submit">Submit</button>
	        <Link to="/register">Register</Link>
	        <Link to="/forgot-password">Forgot Password</Link>
	      </div>

	      {this.renderAlert()}
			</form>
		);
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.error,
    authenticated: state.authenticated
  }
}

export default reduxForm({
  form: 'LoginForm'
}, mapStateToProps, authenticateUser)(LoginForm);
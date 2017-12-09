import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../_actions';
import { required, email, history } from '../_helpers';
import { renderInputField } from '../_components';

class LoginForm extends Component {

	componentWillMount() {
    if(this.props.authenticated) {
      history.push('/');
    }
  }

	handleFormSubmit(props) {
		this.props.authenticateUser(props);
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
	        component={renderInputField}
	        label="Email"
	        validate={[required, email]}
	      />
	      <Field
	        name="password"
	        type="password"
	        component={renderInputField}
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

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.loginError,
  authenticated: state.authentication.isAuthenticated
});

LoginForm = connect(
  mapStateToProps,
  actions
)(LoginForm);

export default reduxForm({
  form: 'LoginForm'
}, null)(LoginForm);
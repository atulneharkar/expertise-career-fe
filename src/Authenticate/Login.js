import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import * as actions from '../_actions';
import { required, email, history } from '../_helpers';
import { renderInputField } from '../_components';

class LoginForm extends Component {

	constructor(props) {
    super(props);

    this.state = {
      redirectUrl: ''
    };
  }

	componentWillMount() {
		if(this.props.location.search) {
			this.setState({ redirectUrl: this.props.location.search.split('?redirectUrl=')[1] });
		}

    if(this.props.authenticated) {
      history.push('/');
    }
  }

  renderAuthResponse() {
		if(this.props.loading) {
			return <div className="loading">loading</div>;
		} else if(this.props.errorMessage) {
			return <div className="error-message">{this.props.errorMessage}</div>;
		} 
	}

  responseFacebook(response) {
	  let user = {
	  	loginType: 'facebook',
	  	name: response.name,
	  	email: response.email
	  };
	  user['avatar'] = (response.picture && response.picture.data.url) ? (response.picture.data.url) : '';
	  this.props.authenticateUser(user, 'facebook', this.state.redirectUrl);
	}

	responseGoogle(response) {
		if(response.profileObj) {
	    let user = {
		  	loginType: 'google',
		  	name: response.profileObj.name,
		  	email: response.profileObj.email
		  };
		  user['avatar'] = (response.profileObj.imageUrl) ? (response.profileObj.imageUrl) : '';
		  this.props.authenticateUser(user, 'google', this.state.redirectUrl);
	  }
  }

  handleFormSubmit(props) {
		this.props.authenticateUser(props, 'local', this.state.redirectUrl);
  }

  render() {
		const { handleSubmit } = this.props;

		return (
			<div className="login-form">
			  <h2 className="form-text">
			  	Learning from experts is now easy, register and join the webinar at <span>Skill Unfold</span>.
			  </h2>
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				  <p className="form-title">Sign In</p>
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
		        <button type="submit" className="sign-in-btn-link">Sign In</button>
		        {this.renderAuthResponse()}
		        <div className="forgot-password-btn-link">
		          <Link to="/forgot-password">Forgot Password?</Link>
		        </div>
		      </div>

		      <div className="register-btn-link">
		      	<p>Don’t have an account? <Link to="/register">Register</Link></p>
		      </div>

		      <hr />
		      <p className="text-center">Or</p>

		      <div className="facebook-login">
		        <FacebookLogin
					    appId="142550689703247"
					    autoLoad={false}
					    fields="name,email,picture"
					    textButton="Sign In with Facebook"
					    callback={this.responseFacebook.bind(this)} />
				  </div>

				  <div className="google-login">
				    <GoogleLogin
					    clientId="448540267236-vhbef0r7l8o8hmqe5gb87sraf95bgasv.apps.googleusercontent.com"
					    buttonText="Sign In with Google"
					    autoLoad={false} 
					    onSuccess={this.responseGoogle.bind(this)}
					    onFailure={this.responseGoogle.bind(this)} />
				  </div>

				</form>
			</div>
		);
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.loginError,
  authenticated: state.authentication.isAuthenticated,
  loading: state.authentication.authLoading
});

LoginForm = connect(
  mapStateToProps,
  actions
)(LoginForm);

export default reduxForm({
  form: 'LoginForm'
}, null)(LoginForm);
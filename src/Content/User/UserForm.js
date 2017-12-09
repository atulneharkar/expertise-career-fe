import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../_actions';
import { required, email, phoneNumber, history, setInputDate } from '../../_helpers';
import { renderInputField, renderSelectField, renderFileInputField } from '../../_components';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userId: '',
			userData: {
				name: '',
				phone: '',
				email: '',
				designation: '',
				dob: ''
			}
		}
	}

	componentWillMount() {
		this.props.getInterestOptionsList();

		const userId = this.props.match.params.userId;
    if(this.props.authenticated && !userId) {
      history.push('/');
    }

    if(userId) {
    	this.setState({ userId });
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
		if(this.state.userData.designation) {
			props['designation'] = this.state.userData.designation;
		}
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
	        //validate={[required]}
	      />
	      <Field
	        name="phone"
	        type="number"
	        component={renderInputField}
	        label="Phone"
	        setValue={this.state.userData.phone}
	        onValueChange={(e) => this.handleInputChange(e)}
	        //validate={[required, phoneNumber]}
	      />
	      <Field
	        name="email"
	        type="text"
	        component={renderInputField}
	        label="Email"
	        setValue={this.state.userData.email}
	        onValueChange={(e) => this.handleInputChange(e)}
	        //validate={[required, email]}
	      />
	      <Field
	        name="password"
	        type="password"
	        component={renderInputField}
	        label="Password"
	        //validate={[required]}
	      />
	      <Field
	        name="confirmPassword"
	        type="password"
	        component={renderInputField}
	        label="Confirm Password"
	        //validate={[required]}
	      />
	      <Field
	        name="designation"
	        component={renderSelectField}
	        label="Interest"
	        optionList={this.props.interestList}
	        setValue={this.state.userData.designation}
	        onValueChange={(e) => this.handleInputChange(e, 'designation')}
	        //validate={[required]}
	      />
	      <Field
	        name="avatar"
          component={renderFileInputField}
          label="Profile Picture"
          //validate={[required]}
        />
	      <Field
	        name="dob"
	        type="date"
	        component={renderInputField}
	        label="Date of Birth"
	        setValue={setInputDate(this.state.userData.dob)}
	        onValueChange={(e) => this.handleInputChange(e)}
	        //validate={[required]}
	      />
	      <div>
	        <button type="submit">Submit</button>
	        <Link to="/login">Cancel</Link>
	      </div>
			</form>
		);
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.userError,
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
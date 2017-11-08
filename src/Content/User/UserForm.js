import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { addUser } from '../../_actions';
import { required, email, phoneNumber } from '../../_helpers';
import { renderInputTextField, renderSelectField } from '../../_components';

class UserForm extends Component {
	handleFormSubmit(props) {
		const { dispatch } = this.props;
    if(this.props.authenticated) {
      //dispatch(editUser(props));
    } else {
      dispatch(addUser(props));
    }
  }

  render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Field
	        name="name"
	        type="text"
	        component={renderInputTextField}
	        label="Name"
	        //validate={[required]}
	      />
	      <Field
	        name="phone"
	        type="number"
	        component={renderInputTextField}
	        label="Phone"
	        //validate={[required, phoneNumber]}
	      />
	      <Field
	        name="email"
	        type="text"
	        component={renderInputTextField}
	        label="Email"
	        //validate={[required, email]}
	      />
	      <Field
	        name="password"
	        type="password"
	        component={renderInputTextField}
	        label="Password"
	        //validate={[required]}
	      />
	      <Field
	        name="confirmPassword"
	        type="password"
	        component={renderInputTextField}
	        label="Confirm Password"
	        //validate={[required]}
	      />
	      <Field
	        name="designation"
	        component={renderSelectField}
	        label="Designation"
	        //validate={[required]}
	      />
	      <Field
	        name="profilePic"
	        type="file"
	        component={renderInputTextField}
	        label="Profile Picture"
	        //validate={[required]}
	      />
	      <Field
	        name="dob"
	        type="date"
	        component={renderInputTextField}
	        label="Date of Birth"
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

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}

export default reduxForm({
  form: 'UserForm'
}, mapStateToProps, addUser)(UserForm);
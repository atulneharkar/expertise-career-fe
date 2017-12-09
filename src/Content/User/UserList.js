import React, { Component } from 'react';
import { connect } from 'react-redux';

import { history } from '../../_helpers';
import * as actions from '../../_actions';

class UserList extends Component {
	componentWillMount() {
		this.props.getUserList();
  }

  handleStatusChange(userId, statusType) {
    this.props.updateUser(userId, {
	    status: statusType
	  });
  }

  handleRoleChange(event) {
    const userId = event.target.getAttribute("data-user-id");
    const selectedRole = event.target.value;
  	this.props.updateUser(userId, {
	    role: selectedRole
	  });
  }

  renderStatusButton(status, userId) {
    if(status === 'active') {
      return <span onClick={() => this.handleStatusChange(userId, 'inactive')}>Delete</span>;
    } else {
      return <span onClick={() => this.handleStatusChange(userId, 'active')}>Activate</span>;
    }
  }

  renderProfilePicture(avatar) {
    if(avatar) {
      return (
        <img alt="Profile Piocture" src={avatar} width="50" height="50" />
      );
    } else {
      <img alt="Profile Piocture" src="default.img" width="50" height="50" />
    }
  }

  renderSelectRole(role, userId) {
    return(
      <select 
        data-user-id={userId} 
        defaultValue={role} 
        onChange={(e) => this.handleRoleChange(e)}>
        <option value="admin">Admin</option>
        <option value="photographer">Photographer</option>
        <option value="user">User</option>
      </select>
    );
  }

  renderUsers() {
    return this.props.userData.map((user) => {
      return (
        <tr key={user._id}>
          <td>{this.renderProfilePicture(user.avatar)}</td>
          <td>{user.name}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>{user.dob}</td>
          <td>{user.designation}</td>
          <td>
            {this.renderSelectRole(user.role, user._id)}
          </td>
          <td>{user.status}</td>
          <td>{this.renderStatusButton(user.status, user._id)}</td>
        </tr>
      );
    });
  }

  renderUserListTemplate() {
  	if(this.props.userData.length) {
	  	return(
	  		<table>
	        <thead>
	          <tr>
	            <td></td>
	            <td>Name</td>
	            <td>Phone</td>
	            <td>Email</td>
	            <td>Date Of Birth</td>
	            <td>Interest</td>
	            <td>Role</td>
	            <td>Status</td>
	            <td>Delete</td>
	          </tr>
	        </thead>
	        <tbody>
	          {this.renderUsers()}
	        </tbody>
	      </table>
	  	);
    } else {
    	return (
    		<p>No User Found.</p>
    	);
    }
  }

  render() {

		return (
			<div>
        {this.renderUserListTemplate()}
      </div>
		);
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.all
});

export default connect(
  mapStateToProps,
  actions
)(UserList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../_actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: ''
    };
  }

  setUserId() {
    const userId = (JSON.parse(localStorage.getItem('userInfo'))) ? JSON.parse(localStorage.getItem('userInfo'))._id : '';
    this.setState({ userId });
  }

  componentWillReceiveProps() {
    this.setUserId();
  }

  componentWillMount() {
    this.setUserId();
  }

  renderAdminLinks() {
  	if(this.props.authenticated) {
  		return [
  			<li key={1}>
  			  <NavLink to="/users" activeClassName="active">Users</NavLink>
  			</li>,
        <li key={2}>
          <NavLink to="/course-admin" activeClassName="active">CourseAdmin</NavLink>
        </li>,
        <li key={3}>
          <NavLink to="/my-dashboard" activeClassName="active">My Dashboard</NavLink>
        </li>
  		];
  	}
  }

  renderUserLinks() {
    return [
      <li key={4}>
        <NavLink to="/our-services" activeClassName="active">Our Services</NavLink>
      </li>,
      <li key={5}>
        <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
      </li>,
      <li key={6}>
        <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
      </li>
    ];
  }

  renderProfileIcon() {
    if(this.props.authenticated) {
      return (
        <div>
          <NavLink to={`/edit-user/${this.state.userId}`} activeClassName="active">Profile</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink to="/login">Sign In</NavLink>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1><NavLink to="/">Expertise Career</NavLink></h1>
        <ul>
          {this.renderAdminLinks()}
          {this.renderUserLinks()}
        </ul>
        {this.renderProfileIcon()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authentication.isAuthenticated
});

export default connect(mapStateToProps, actions)(Header);

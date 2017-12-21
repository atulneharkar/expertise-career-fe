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

  renderUserLinks() {
    if(this.props.authenticated) {
      return [
        <li key={1}>
          <NavLink to="/my-dashboard" activeClassName="active">My Dashboard</NavLink>
        </li>
      ];
    }
  }

  renderAdminLinks() {
  	if(this.props.admin) {
  		return [
        <li key={2}>
          <NavLink to="/admin-dashboard" activeClassName="active">Admin Dashboard</NavLink>
        </li>
  		];
  	}
  }

  renderDefaultLinks() {
    return [
      <li key={3}>
        <NavLink to="/consulting" activeClassName="active">Consulting</NavLink>
      </li>,
      <li key={4}>
        <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
      </li>,
      <li key={5}>
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
          {this.renderUserLinks()}
          {this.renderAdminLinks()}
          {this.renderDefaultLinks()}
        </ul>
        {this.renderProfileIcon()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authentication.isAuthenticated,
  admin: state.authentication.isAdmin
});

export default connect(mapStateToProps, actions)(Header);

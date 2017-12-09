import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../_actions';

class Header extends Component {
  constructor(props) {
    super(props);

    const userId = (JSON.parse(localStorage.getItem('userInfo'))) ? JSON.parse(localStorage.getItem('userInfo'))._id : '';

    this.state = {
      userId: userId
    };
  }

  renderList() {
  	if(this.props.authenticated) {
  		return [
  			<li key={1}>
  			  <NavLink to="/users" activeClassName="active">Users</NavLink>
  			</li>,
        <li key={2}>
          <NavLink to={`/edit-user/${this.state.userId}`} activeClassName="active">Profile</NavLink>
        </li>,
  			<li key={3}>
  			  <NavLink to="/logout">Logout</NavLink>
  			</li>
  		];
  	}
  }

  render() {
    return (
      <div>
        <h1><NavLink to="/">Photgraphy</NavLink></h1>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authentication.isAuthenticated
});

export default connect(mapStateToProps, actions)(Header);

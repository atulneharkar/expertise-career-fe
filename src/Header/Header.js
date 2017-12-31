import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../_actions';
import defaultProfileImage from '../assets/images/default-profile-image.png';
import hamburgerIcon from '../assets/images/hamburger.png';
import closeIcon from '../assets/images/close.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      userInfo: null,
      mobileMenu: false
    };
  }

  setUserId() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userId = (userInfo) ? userInfo._id : '';
    this.setState({ userId, userInfo });
  }

  componentWillReceiveProps() {
    this.setUserId();
  }

  componentWillMount() {
    this.setUserId();
  }

  toggleMobileMenu(mobileMenu) {
    this.setState({ mobileMenu });
  }

  renderUserLinks() {
    if(this.props.authenticated) {
      return [
        <li key={1}>
          <NavLink to="/my-dashboard" activeClassName="active" onClick={() => this.toggleMobileMenu(false)}>My Dashboard</NavLink>
        </li>
      ];
    }
  }

  renderAdminLinks() {
  	if(this.props.admin) {
  		return [
        <li key={2}>
          <NavLink to="/admin/users" activeClassName="active" onClick={() => this.toggleMobileMenu(false)}>Admin Dashboard</NavLink>
        </li>
  		];
  	}
  }

  renderDefaultLinks() {
    return [
      <li key={3}>
        <NavLink to="/consulting" activeClassName="active" onClick={() => this.toggleMobileMenu(false)}>Consulting</NavLink>
      </li>,
      <li key={4}>
        <NavLink to="/about-us" activeClassName="active" onClick={() => this.toggleMobileMenu(false)}>About</NavLink>
      </li>,
      <li key={5}>
        <NavLink to="/contact-us" activeClassName="active" onClick={() => this.toggleMobileMenu(false)}>Contact</NavLink>
      </li>
    ];
  }

  renderProfileImage() {
    if(this.state.userInfo && this.state.userInfo.avatar) {
      return (
        <img src={this.state.userInfo.avatar} alt="profile pic" width="32" height="32" className="profile-image" />
      );
    } else {
      return (
        <img src={defaultProfileImage} alt="profile pic" width="32" height="32" className="profile-image" />
      );
    }
  }

  renderProfileIcon() {
    if(this.props.authenticated) {
      return (
        <div className="my-profile">
          {this.renderProfileImage()}
          <div className="additional-profile-info">
            <div className="">
              <p>{this.state.userInfo.name}</p>
              <p>{this.state.userInfo.email}</p>
              <p>{this.state.userInfo.mobile}</p>
            </div>
            <div className="profile-edit-wrapper clearfix">
              <NavLink to={`/edit-user/${this.state.userId}`} activeClassName="active" onClick={() => this.toggleMobileMenu(false)}>Profile</NavLink>
              <NavLink to="/logout" onClick={() => this.toggleMobileMenu(false)}>Logout</NavLink>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="my-profile">
          <NavLink to="/login" className="sign-in-btn" onClick={() => this.toggleMobileMenu(false)}>Sign In</NavLink>
        </div>
      );
    }
  }

  render() {
    return (
      <header className={(this.props.authenticated) ? 'header-profile-img' : ''}>
        <div className="header-wrapper clearfix">
          <h1 className="main-logo pull-left" onClick={() => this.toggleMobileMenu(false)}><NavLink to="/">Skill Unfold</NavLink></h1>
          <div className="pull-right main-nav clearfix">
            <img src={hamburgerIcon} alt="hamburger icon" className={this.state.mobileMenu ? 'hamburger-hide hamburger-icon' : 'hamburger-icon' } width="32" height="32" onClick={() => this.toggleMobileMenu(true)} />
            <img src={closeIcon} alt="close icon" className={this.state.mobileMenu ? 'close-icon-show close-icon' : 'close-icon' } width="28" height="28" onClick={() => this.toggleMobileMenu(false)} />
            <div className={this.state.mobileMenu ? 'mobile-menu mobile-menu-show' : 'mobile-menu' }>
              <ul>
                {this.renderUserLinks()}
                {this.renderAdminLinks()}
                {this.renderDefaultLinks()}
              </ul>
              {this.renderProfileIcon()}
            </div>
            <div className={this.state.mobileMenu ? 'overlay overlay-show' : 'overlay'} onClick={() => this.toggleMobileMenu(false)}></div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authentication.isAuthenticated,
  admin: state.authentication.isAdmin
});

export default connect(mapStateToProps, actions, null, {pure:false})(Header);

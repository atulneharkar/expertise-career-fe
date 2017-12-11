import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import {PrivateRoute} from './_components';

import Home from './Content/Home/Home';
import Login from './Authenticate/Login';
import Logout from './Authenticate/Logout';
import ForgotPassword from './Authenticate/ForgotPassword';
import ResetPassword from './Authenticate/ResetPassword';
import UserForm from './Content/User/UserForm';
import UserList from './Content/User/UserList';
import AboutUs from './Content/AboutUs/AboutUs';
import ContactUs from './Content/ContactUs/ContactUs';
import CourseDetail from './Content/CourseDetail/CourseDetail';
import CourseAdmin from './Content/CourseAdmin/CourseAdmin';

class Routes extends Component {
  isAuthenticated() {
    return (this.props.authenticated) ? 'true' : 'false';
  }

  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/register' component={UserForm}/>
        <Route path='/forgot-password' component={ForgotPassword}/>
        <Route path='/reset-password/:otp/:userId' component={ResetPassword}/>
        <Route exact path='/' component={Home}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/course-detail/:courseId' component={CourseDetail}/>

        <PrivateRoute path='/course-admin' authenticated={this.isAuthenticated()} component={CourseAdmin}/>
        <PrivateRoute path='/edit-user/:userId' authenticated={this.isAuthenticated()} component={UserForm}/>
        <PrivateRoute path='/users' authenticated={this.isAuthenticated()} component={UserList}/>

        <Redirect to="/" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authentication.isAuthenticated
});

export default Routes = withRouter(connect(
  mapStateToProps
)(Routes));
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
import OurServicesDetails from './Content/OurServices/OurServicesDetails';
import AboutUs from './Content/AboutUs/AboutUs';
import ContactUs from './Content/ContactUs/ContactUs';
import CourseDetails from './Content/Course/CourseDetails';

import UserDashboard from './Content/UserDashboard/UserDashboard';
import AdminDashboard from './Content/AdminDashboard/AdminDashboard';
import TrendingForm from './Content/Trending/TrendingForm';
import TrendingListTableView from './Content/Trending/TrendingListTableView';
import CourseForm from './Content/Course/CourseForm';
import CourseListTableView from './Content/Course/CourseListTableView';

class Routes extends Component {
  isAuthenticated() {
    return (this.props.authenticated) ? 'true' : 'false';
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/register' component={UserForm}/>
        <Route path='/forgot-password' component={ForgotPassword}/>
        <Route path='/reset-password/:otp/:userId' component={ResetPassword}/>
        <Route path='/our-services' component={OurServicesDetails}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/course-details/:courseId' component={CourseDetails}/>

        <PrivateRoute path='/my-dashboard' authenticated={this.isAuthenticated()} component={UserDashboard}/>
        <PrivateRoute path='/admin-dashboard' authenticated={this.isAuthenticated()} component={AdminDashboard}/>
        <PrivateRoute path='/edit-user/:userId' authenticated={this.isAuthenticated()} component={UserForm}/>
        <Route path='/trending-admin' component={TrendingForm}/>
        <Route path='/trending-list-admin' component={TrendingListTableView}/>
        <Route path='/course-admin' component={CourseForm}/>
        <Route path='/course-list-admin' component={CourseListTableView}/>

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
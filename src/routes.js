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
import TrendingForm from './Content/Trending/TrendingForm';
import CourseForm from './Content/Course/CourseForm';
import UserList from './Content/User/UserList';
import TrendingListTableView from './Content/Trending/TrendingListTableView';
import CourseListTableView from './Content/Course/CourseListTableView';
import QueryList from './Content/ContactUs/QueryList';

class Routes extends Component {
  isAuthenticated() {
    return (this.props.authenticated) ? 'true' : 'false';
  }

  isAdmin() {
    return (this.props.admin) ? 'true' : 'false';
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
        <Route path='/consulting' component={OurServicesDetails}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/webinar/:courseId' component={CourseDetails}/>

        <PrivateRoute path='/my-dashboard' authenticated={this.isAuthenticated()} component={UserDashboard}/>
        <PrivateRoute path='/edit-user/:userId' authenticated={this.isAuthenticated()} component={UserForm}/>
        <PrivateRoute path='/create-trending' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={TrendingForm}/>
        <PrivateRoute path='/edit-trending/:trendingId' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={TrendingForm}/>
        <PrivateRoute path='/create-course' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={CourseForm}/>
        <PrivateRoute path='/edit-course/:courseId' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={CourseForm}/>
        <PrivateRoute path='/admin/users' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={UserList}/>
        <PrivateRoute path='/admin/trendings' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={TrendingListTableView}/>
        <PrivateRoute path='/admin/courses' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={CourseListTableView}/>
        <PrivateRoute path='/admin/queries' admin={this.isAdmin()} authenticated={this.isAuthenticated()} component={QueryList}/>

        <Redirect to="/" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authentication.isAuthenticated,
  admin: state.authentication.isAdmin
});

export default Routes = withRouter(connect(
  mapStateToProps
)(Routes));
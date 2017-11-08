import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Content/Home/Home';
import Login from './Authenticate/Login';
import Logout from './Authenticate/Logout';
import ForgotPassword from './Authenticate/ForgotPassword';
import ResetPassword from './Authenticate/ResetPassword';
import UserForm from './Content/User/UserForm';
import {PrivateRoute} from './_components';

const Routes = () => (
  <Switch>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={UserForm}/>
    <Route path='/forgot-password' component={ForgotPassword}/>
    <Route path='/reset-password/:otp/:userId' component={ResetPassword}/>

    <PrivateRoute exact path='/' authenticated='true' component={Home}/>
    <PrivateRoute exact path='/home' authenticated='true' component={Home}/>
    <PrivateRoute path='/logout' component={Logout}/>

    <Redirect to="/" />
  </Switch>
);

export default Routes;
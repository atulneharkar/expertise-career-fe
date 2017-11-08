import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest, authenticated: authenticated}) => {

	return (<Route
    {...rest}
    render={(props) => (authenticated === 'true')
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />)
}
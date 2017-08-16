import React, { Component } from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import { isAuthenticated } from './localstorage';

export const PrivateRoute = ({ component: Dashboard, component: Navbar, ...rest }) => (
    
    <Route {...rest} render={props => (
        
      isAuthenticated() ? (
        <Dashboard {...props}/>,
        <Navbar {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
  
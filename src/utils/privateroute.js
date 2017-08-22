import React, { Component } from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import { isAuthenticated } from './localstorage';

export const PrivateRoute = ({ component: Dashboard, component: Navbar, component:ProfileData, component:Timeline,component:Scheduled,component:Bookmarks, component:Affiliate,component:AffCreate, ...rest }) => (
    
    <Route {...rest} render={props => (
        
      isAuthenticated() ? (
        <Dashboard {...props}/>,
        <Navbar {...props}/>,
        <ProfileData {...props}/>,
        <Timeline {...props}/>,
        <Scheduled {...props}/>,
        <Bookmarks {...props}/>,
        <Affiliate {...props}/>,
        <AffCreate {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
  
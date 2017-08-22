import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './Layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/sign-up';
import Dashboard from './pages/dashboard';
import Navbar from './Layout/navbar';
import Logout from './pages/Logout';
import Timeline from './pages/timeline';
import Scheduled from './pages/scheduled';
import Bookmarks from './pages/bookmarks';
import ProfileData from './pages/profileData';
import Affiliate from './pages/affiliate';
import AffCreate from './pages/createAff';
import { PrivateRoute } from './utils/privateroute';

class App extends Component {
  render() {
    return (
      <Router>
		    <div>
		      <Header />
		      <hr/>
		      <Route exact path="/" component={Home}/>
		      <Route path="/about" component={About}/>
		      <Route path="/login" component={Login}/>
		      <Route path="/signup" component={Signup}/>
		      <PrivateRoute path="/dashboard" component={Dashboard}/>
		      <PrivateRoute path="/navbar" component={Navbar}/>
					<PrivateRoute path="/profile" component={ProfileData}/>
					<PrivateRoute path="/timeline" component={Timeline}/>
					<PrivateRoute path="/scheduled" component={Scheduled}/>
					<PrivateRoute path="/bookmarks" component={Bookmarks}/>
					<PrivateRoute path="/affiliate" component={Affiliate}/>
					<PrivateRoute path="/aff-create" component={AffCreate}/>
		      <Route path="/logout" component={Logout}/>
		    </div>
		  </Router>
    );
  }
}

export default App;

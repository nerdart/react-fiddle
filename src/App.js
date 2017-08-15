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
		      <Route path="/dashboard" component={Dashboard}/>
		      <Route path="/navbar" component={Navbar}/>
		      <Route path="/logout" component={Logout}/>
		    </div>
		  </Router>
    );
  }
}

export default App;

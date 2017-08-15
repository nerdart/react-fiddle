import React, { Component } from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import { getItem } from '../utils/localstorage';
import { removeItem } from '../utils/localstorage';

class Logout extends Component{
	constructor(props) {
		super(props);
		this.state={isAuthenticated:false}
		this.isLoggedIn = this.isLoggedIn.bind(this);
	}
isLoggedIn(){

	if(localStorage.token!==''){
		console.log('into')
		this.setState({isAuthenticated:true})
	}
}

render(){
const isAuthenticated = this.state.isAuthenticated;
	return (
		<Route exact path="/home" render={() => (
  isAuthenticated ? (
    <Redirect to="/dashboard"/>
  ) : (
    <Redirect to="/signup"/>
  )
)}/>
	)
}
}
export default Logout;

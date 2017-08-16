import React, { Component } from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import { removeItem } from '../utils/localstorage';

class Logout extends Component{
	constructor(props) {
		super(props);
		removeItem('token');	
		
	}
	render(){
		return <Redirect to='/login' />
	}

}
export default Logout;

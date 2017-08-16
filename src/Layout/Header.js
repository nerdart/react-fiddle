import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, removeItem } from '../utils/localstorage';
import {
  Redirect,
  Route
} from 'react-router-dom';

const Header = () => {
	const isAuth = isAuthenticated();
	let headerMenu = null;
	let logoutState = null;


	if(isAuth) {
		headerMenu = (
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/logout">Logout</Link>
		);
	} else {
		headerMenu = (
			<div>
				<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/login">Login</Link>
				<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/signup">Sign Up</Link>
			</div>
		);
	}

	return (
		<nav className="dt w-100 border-box pa3 ph5-ns">
		  <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
		    Flynk
		  </a>
			<div className="dtc v-mid w-75 tr">
		    <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/">
					Home
				</Link>
				{headerMenu}	
		  </div>
		</nav>
		)
}

export default Header;
	
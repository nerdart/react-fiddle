import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, removeItem } from '../utils/localstorage';
import {
  Redirect,
  Route
} from 'react-router-dom';
const headerStyles = {
	alignContainer : {
		background: '#444d58',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    padding: '1rem 1rem 1rem 1rem'
	},
	navLink : {
		float:'right',
		marginRight: '9%'
	},
	navLinkDashboard : {
		marginLeft: '9%'
	}

}
const Header = () => {
	const isAuth = isAuthenticated();
	let headerMenu = null;
	let logoutState = null;


	if(isAuth) {
		headerMenu = (
			<div>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/logout">Logout</Link>
			
			</div>
		);
	} else {
		headerMenu = (
			<div>
				<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/login">Login</Link>
				<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/signup">Sign Up</Link>
			</div>
		);
	}

	const mainNav = (
		<div style = {headerStyles.alignContainer} className="navContainer">
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/dashboard" style= {headerStyles.navLinkDashboard }>Dashboard</Link>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/timeline">Timeline</Link>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/scheduled">Scheduled</Link>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/bookmarks">Bookmarks</Link>
			
		</div>
	)
	const dropdown = (
		<div className="dropdown">
			<button className="dropbtn">Profile</button>
			<div className="dropdownContent">
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/profile">Account Settings</Link>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/socialAcc">Social Accounts</Link>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/affiliate">Affiliate Setup</Link>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/logout">Logout</Link>
		</div>
	</div>
	)

	return (
		<div>
		<nav className="dt w-100 border-box pa3 ph5-ns">
		  <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
		    Flynk
		  </a>
			<div className="dtc v-mid w-75 tr">
		    {/* <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/">
					Home
				</Link> */}
				{headerMenu}	
		  </div>
		</nav>
		
			{mainNav}
			<span> 
			{dropdown}
			</span>
			</div>
		)
}

export default Header;
	
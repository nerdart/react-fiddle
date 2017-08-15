import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/logout">Logout</Link>



	return (
		<nav className="dt w-100 border-box pa3 ph5-ns">
		  <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
		    Flynk
		  </a>
		  <div className="dtc v-mid w-75 tr">
		    <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/">Home</Link>
		    <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/login">Login</Link>
        <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/signup">Sign Up</Link>

		  </div>
		</nav>
		)
}

export default Header;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dashboardData } from '../utils/dataservice';

class Dashboard extends Component{
	constructor(props) {
		super(props);

	}

	render(){
		return (
		<div className="dtc v-mid w-75 tr">
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/dashboard">Dashboard</Link>
			<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/navbar">Navbar</Link>
		</div>
		)
	}
}
export default Dashboard;

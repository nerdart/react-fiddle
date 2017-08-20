import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dashboardData } from '../utils/dataservice';

class Dashboard extends Component{
	constructor(props) {
		super(props);

	}

	render(){
		return (
			<div>
				<button className="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray">
					
					<Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/navbar">Add Link</Link>
				</button>
			</div>
		)
	}
}
export default Dashboard;

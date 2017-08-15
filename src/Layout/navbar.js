import React, { Component } from 'react';
import { NavBarData } from '../utils/dataservice';

const NavStyles = {
	LinkInput : {
		width: '80%',
		height: '40px',
		padding: '5px 20px',
		border: '2px solid #777'
	},
	LinkInputWrap: {
		textAlign: 'center',
		margin: '0 auto'
	},
	paddingLeft: {
		paddingLeft : '10px'
	},
	responseModal: {
		width: '100vw',
		height: '100vh',
		background : 'white',
		top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    padding: '200px'
	},
	CloseButton: {
		position: 'fixed',
		fontSize: '<1 class="3"></1>em',
		textDecoration: 'none',
		right: '100px',
		top: '100px',
		color: '#777',
		fontFamily: 'helvetica'
	}
}


class Navbar extends Component{
	constructor(props) {
		super(props);
		this.state = { url: '' }
		this.handleInputChange=this.handleInputChange.bind(this);
		this.closeLinkDetails=this.closeLinkDetails.bind(this);
	}

	handleInputChange(event){
		const value = event.target.value;
		const pattern = new RegExp('/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g');
		this.setState({
			url: value
		})
		// if(!pattern.test(value)) {
		if(value.length>10) {
	  	// getting url data
	    NavBarData(value).then((r) => {
	    	this.setState({
	    		response:r.data,
	    		url: ''
	    	});
	    });
	  } else {
	  	return;
	  }

	}

	closeLinkDetails() {
		this.setState({ response: '' })
	}

render(){
	const { response } = this.state
	if(response){
		return (
				<div style={NavStyles.responseModal}>
					<a style={NavStyles.CloseButton} onClick={this.closeLinkDetails} href="#" alt="">
						X
					</a>
					<p>{response.name}</p>
					<span>{response.url}</span><a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black">copy</a>
				</div>
			)
	}
	return (
	<div style={NavStyles.LinkInputWrap}>
		<input type="text" style={NavStyles.LinkInput} value={this.state.url} name="product-link" placeholder="paste your product link here" onChange={this.handleInputChange}/>
	</div>
	)
}

}
export default Navbar;

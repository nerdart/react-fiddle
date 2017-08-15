import React, { Component } from 'react';
import { RegisterUser } from '../utils/dataservice';



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { fname:'', lname:'', email: '', password: ''};
    this.respo='';
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.fname!=='' && this.state.lname!=='' && this.state.email !== '' && this.state.password !== '' ) {
    	RegisterUser(this.state);
    }
  }

  render() {
	  return (
	  	<div>

      <form onSubmit={this.handleSubmit}>
      	 <label>
          First Name:
          <input type="text" name="fname" value={this.state.fname} onChange={this.handleInputChange} />
        </label>
        <br/>
         <label>
          Last Name:
          <input type="text" name="lname" value={this.state.lname} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Password:
          <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Confirm Password:
          <input type="text" name="confirmPassword"  />
        </label>
        <input type="submit" value="Submit" />

      </form>

      </div>
    );
  }
};

export default Signup;

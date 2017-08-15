import React, { Component } from 'react';
import { LoginUser } from '../utils/dataservice';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

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

    if(this.state.email !== '' && this.state.password !== '') {
    	LoginUser(this.state).then((r) => {
    		this.setState({loginSuccess: true});
    	});
    }
  }

  render() {
  	const { loginSuccess } = this.state

    if (loginSuccess) {
      return (
        <Redirect to={'dashboard'}/>
      )
    }

    return (
    	<main className="pa4 black-80">
			  <form className="measure center" onSubmit={this.handleSubmit}>
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim black db">Sign up</a>
			      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
			    </div>
			  </form>
			</main>
    );
  }
};

export default Login;

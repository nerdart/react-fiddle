import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../utils/dataservice';

class ProfileData extends Component{
    constructor(props){
        super(props);
        this.state = { 
          user: undefined
        };
    }

    componentDidMount() {
      var _this = this;      
        profileData().then(function(r){
            _this.setState({
                user: r.data.details
            });
        });
    }

    render(){
        const { user } = this.state
        if(user) {
          return (
            <div className="alignCenter">
            <h2>Profile Details</h2>
              <div>{user.fname}  {user.lname} </div>
            
              <div>{user.email}</div>
            </div>
          )
        } else {
          return ( 
            <h2>
              Loading...
            </h2>
          )
        }
    }
}
export default ProfileData;

import React, { Component } from 'react';
import { profileData } from '../utils/dataservice';

class ProfileData extends Component{
    constructor(props){
        super(props);
        this.state = { user: null };
    }

    componentDidMount() {
        profileData().then(function(r){
            this.setState({
              user: r.data.details
            });
        });
    }

    render(){
        const { user } = this.state
        console.log(user);
        return (
            <div>
                <a>
                Profile Details
                </a>
                {/* {user.fname}       */}
            </div>
        )
    }
}
export default ProfileData;

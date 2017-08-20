import React, { Component } from 'react';
import { scheduled } from '../utils/dataservice';

class Scheduled extends Component{
constructor(props){
    super(props);
    this.state = {
        scheduledLinks:undefined
    }
}
componentDidMount(){
    var _this = this;
    scheduled("1").then(function(r){
        _this.setState({
            scheduledLinks:r.details
        })
    })
}
render(){
    const {scheduledLinks} = this.state
    if(scheduledLinks){
        return (
            <div className="alignMargin">
                Links {scheduledLinks}
            </div>
        )
    }
    else{
        return (
            <div className="alignMargin">
                No posts scheduled at the moment.
            </div>
        )
    }

}

}
export default Scheduled;
import React, { Component } from 'react';
import { timeline } from '../utils/dataservice';

class Timeline extends Component{
constructor(props){
    super(props);
    this.state = { links:undefined}
   
}
componentDidMount(){
    var _this = this
    timeline("1").then(function(r){
        _this.setState({
            links:r.data.details
        })
    })
}

render(){
    const { links } = this.state
    if(links){
    return (
        <div className="alignMargin">
            Timeline Links
        </div>
    )
}
else
    {
        return (
            <div className="alignMargin">
                No links added yet
            </div>
        )
    }
}

}
export default Timeline;

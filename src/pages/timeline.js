import React, { Component } from 'react';
import { timeline } from '../utils/dataservice';

class Timeline extends Component{
constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
   
}
handleInputChange(event){
    
    timeline("1").then(function(r){
        console.log(r);
    })
}

render(){
    //const { response } = this.state
    return (
    <div>
        <a onClick={this.handleInputChange}>
       Timeline
        </a>
        
    </div>
    )
}

}
export default Timeline;

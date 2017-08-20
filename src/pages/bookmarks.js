import React, { Component } from 'react';
import { bookmarks } from '../utils/dataservice';

class Bookmarks extends Component{
    constructor(props){
       super(props);
       this.state = {
           links:undefined
       } 
    }
componentDidMount(){
    var _this = this;
    bookmarks("1").then(function(r){
        
        _this.setState({
            links:r.details
        })
       
    })
}
render(){
    const { links } = this.state;
    if(links){
        return (
            <div className="alignMargin">
                Bookmarks {links}
            </div>
        )
    }
    else
        {
            return (
                <div className="alignMargin">
                    No Bookmarks added 
                </div>
            )
        }
}
}
export default Bookmarks;
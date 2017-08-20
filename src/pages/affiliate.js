import React, { Component } from 'react';
import { affiliate } from '../utils/dataservice';

class Affiliate extends Component{
    constructor(props){
        super(props);
        this.state = {
            affiliateLinks:undefined
        }
    }
    componentDidMount() {
        var _this = this;
        affiliate().then(function(r){
            console.log("r", r)
            _this.setState({
                affiliateLinks:r.details
            });
        })

    }
    
    render(){
        const { affiliateLinks } = this.state;
        if(affiliateLinks){
            return (
                <div className="alignMargin">
                    {affiliateLinks}
                </div>
            )
        }
        else{
            debugger;
            return (
            
                <div className="alignMargin">
                    Connected Accounts {affiliateLinks}
                </div>
            )
        }

    }
}
export default Affiliate;
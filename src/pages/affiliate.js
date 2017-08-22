import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                affiliateLinks:r.data.details

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
                 <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/aff-create">create Aff</Link>
                    Connected Accounts {affiliateLinks}
                </div>
            )
        }

    }
}
export default Affiliate;
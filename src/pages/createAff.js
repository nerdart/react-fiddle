import React, { Component } from 'react';
import { affiliateCreate } from '../utils/dataservice';

class AffCreate extends Component{
    constructor(props){
        super(props);
        this.state = {name:'', aff:'', aff_param:''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event)
    {
        const target = event.target;
        const name = target.name;
        
        this.setState({
            [name]: target.value
          });
    }
    handleSubmit(event){
        event.preventDefault();
        if(this.state.name !=='' && this.state.affId !== ''){
            affiliateCreate(this.state).then(function(r){
                console.log("r", r);
            })
        }
    }
    render(){
        return(
            <div className="alignMargin">
                <h2>Add an Affiliate</h2>
                <form className="measure center" onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" name = "name" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                    <div>
                    <input type="text" name="aff_param" value={this.state.aff_param} onChange={this.handleInputChange} />
                    </div>
                    <div>
                    <input type="text" name="aff" value={this.state.aff} onChange={this.handleInputChange} />
                   </div>
                   <div>
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>
                </form>
            </div>
        )
    }
}
export default AffCreate;
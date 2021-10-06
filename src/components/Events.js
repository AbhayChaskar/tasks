import React, { Component } from 'react';
export class Events extends Component {
    constructor(props){
        super(props);
        this.state={fname:"Abhay"}
    }
    handler=(event)=>{
        let {name,value}=event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <h2 style={{color:"white",backgroundColor:"salmon"}}> Events </h2>
            Enter Name : <input type="text" name="fname" onChange={this.handler} defaultValue={this.state.fname}/> <br/>
            <p> Name is {this.state.fname}</p>
            </div>
        )
    }
}
export default Events;

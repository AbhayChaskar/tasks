import React, { Component } from 'react'
import Button from './Button';
import '../styles/SumEventTask.css';
export class SumEventTask extends Component {
    constructor(props){
        super(props);
        this.state={num1:'',num2:'',sum:''}
    }
    handler=(event)=>{
      const {name,value}=event.target;
      this.setState({[name]:value})
    }
    Add=(event)=>{
        let total=parseInt(this.state.num1)+parseInt(this.state.num2);
        this.setState({sum:total})
    }
    render() {
        return (
            <div>
              <h2 className="heading" style={{color:"white",backgroundColor:"salmon"}}> Addition </h2>  
                Num1 : <input type="text" name="num1" onChange={this.handler} className="input"/><br/>
                Num2 : <input type="text" name="num2" onChange={this.handler} className="input"/><br/><br/>
                <Button label="Addition" action={this.Add} />
                <p className="tot"> The total is {this.state.sum}</p>
            </div>
        )
    }
}
export default SumEventTask

import React, { Component } from 'react'
import Button from './Button';

export class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={srno:'',title:'',action:''}
    }
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    Add=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                SrNo : <input type="textbox" name="srno" onChange={this.handler} className="input"/><br/>
                Title : <input type="textbox" name="title" onChange={this.handler} className="input"/><br/>
                Action : <input type="textbox" name="action" onChange={this.handler} className="input"/><br/>
                <Button label="Add task" action={this.Add} />

                <table border='1'>
                    <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Title </th>
                        <th>Action </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.srno}</td>
                        <td>{this.state.title}</td>
                        <td>{this.state.action}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList

import React,{Component} from 'react';
class Myclass extends Component
{
    constructor(props){
        super(props);
        this.state={name:"Abhay", age:23}
    }
    updateData=()=>{
        this.setState({name:"Akshay"})
    }
    render(){
        return(
            <div>
                <h2 style={{color:"white",backgroundColor:"salmon"}}>Class Component :{this.props.title}</h2>
                <p>The name is {this.state.name} and age is {this.state.age}</p>
                <button onClick={this.updateData}>Update Data</button>
            </div>
        )
    }
}
export default Myclass;
import React,{Component} from 'react';
import Button from './Button';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count:0, isLoggedIn:true}
    }
    updateCounter=()=>{
       this.setState(
             {count:this.state.count+1})
    }
    render(){
        //Conditional Rendering using ifelse IMP
        let {isLoggedIn}=this.state;
        // const authButton=()=>{
        //     if(isLoggedIn){
        //         return <button>Login</button>
        //     }
        //     else{
        //         return <button>Logout</button>
        //     }
        // }
        return(
            <div>
                {/* {authButton()} */} {/* if else method name */}
                {isLoggedIn ? <button>Login</button>:<button>Logout</button>} {/* Conditional rendering using ternary op */}
                <h2 style={{textAlign:"center",color:"white",backgroundColor:"salmon"}}> Counter</h2>
                <p> The counter is {this.state.count}</p>
                <Button action={this.updateCounter} label="Counter"/>
            </div>
        )
    }
}
export default Counter;
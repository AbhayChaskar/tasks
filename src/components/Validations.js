import React, { Component } from 'react'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName =RegExp(/^[A-Za-z]/);
const regForAge =RegExp(/^[0-9]/);
const regForMobile=RegExp(/^[1-9]\d{9}$|^[1-9]\d{9}$/)
export class Validations extends Component {
    constructor(props){
        super(props);
        this.state={
            email:null,
            password:null,
            name:null,
            age:null,
            mobile:null,
            store:[
                {id:1,email:'',password:'',name:'',mobile:'',age:''}
            ],
            errors:{
                name:'',
                age:'',
                email:'',
                password:'',
                confirm_password:'',
                mobile:''
                
                
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'name':
                    errors.name=regForName.test(value)?'':'Enter Valid Name';
                    break;
                    case 'age':
                        errors.age=regForAge.test(value)?'':'Enter Valid Age';
                        break;
                    case 'email':
                        errors.email=regForEmail.test(value)?'':'Email is not valid';
                        break;
                    case 'password':
                        errors.password=value.length<8?'Password must me 8 chanrater long':'';
                            break;
                    // case 'confirm_password':
                    //             errors.confirm_password==this.value.password?'Not same as above':'';
                    //             break;
                    case 'mobile':
                        errors.mobile=regForMobile.test(value)?'':'Mobile Number is not valid';
                        break;
                        break;
                }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           if(this.validate(this.state.errors))
           {
               alert("Valid Form");
            //    storeValues();
           }
           else {
               alert("Invalid Form");
           }
        }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
        // storeValues(){

        // }
        onSubmit(){
            var store=this.state.store;
            const newItem = {
                 name: this.state.name,
                 age: this.state.age,
                email: this.state.email,
                password:this.state.password,
                mobile:this.state.mobile

              }
            const updatedItems = [...this.state.store,newItem]
            this.setState({
              store: updatedItems,
              name:'',
              age:'',
              email:'',
              password:'',
              mobile:'',

             // id: uuid(),
              editItem: false
            },()=>console.log(this.state))
            console.log(this.store)
        }
        renderRows(){
            var context = this;

            return  this.state.store.map(function(val, index) {
                      return (
                        <tr key={"item-" + index}>
                            {/* <td>{index+1}</td> */}
                          <td>
                            {val.name}
                          </td>
                          <td>
                            {val.age}
                          </td>
                          <td>
                            {val.mobile}
                          </td>
                          <td>
                            {val.email}
                          </td>
                          <td>
                            {val.password}
                          </td>
                        </tr>
                      );
                    });
        }
            render() {
        const {errors}=this.state;
        return (
            <div className="container-fluid row text-white">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h2 className="text-center"> Form Validation</h2>
                <form onSubmit={this.formSubmit}>

                Name : <input type="text" name="name" onChange={this.handler} value={this.name} className="form-control"/>{errors.name.length>0 && 
                <span style={{color:'red'}}>{errors.name}</span>}<br/>
                Age : <input type="text" name="age" id="age" onChange={this.handler} className="form-control" />{errors.age.length>0 && 
                <span style={{color:'red'}}>{errors.age}</span>}<br/>
                Email : <input type="text" name="email" onChange={this.handler} className="form-control"/> {errors.email.length>0 && 
                <span style={{color:'red'}}>{errors.email}</span>}<br/>
                Password : <input type="password" name="password" value={this.password} onChange={this.handler} className="form-control"/>
                {errors.password.length>0 && 
                <span style={{color:'red'}}>{errors.password}</span>}<br/>
                Confirm Password : <input type="password" name="confirm_password" onChange={this.handler}/>
                {errors.confirm_password.length>0 && 
                <span style={{color:'red'}}>{errors.confirm_password}</span>}<br/>
                Mobile No. : <input type="text" name="mobile" value={this.mobile} onChange={this.handler} className="form-control"/>
                {errors.mobile.length>0 && 
                <span style={{color:'red'}}>{errors.mobile}</span>}<br/>
            
            
            <input type="submit" value="submit" onClick={this.onSubmit.bind(this)} className="btn btn-primary text-center" style={{textAlign:"center", marginLeft:"250px"}} />
            </form>
            </div>
            <div className="col-md-3"></div>
            {/* <ul>
                {this.state.store.map((store,index)=>
                <li>{store.email}
                {store.password}</li>
                
                 )}
            </ul> */}
             <table className="table text-white " style={{width:"100%"}}>
          <thead >
            <tr> 
            <th scope="col">
                Name
              </th> 
              <th scope="col">
                Age
              </th>
              <th scope="col">
                Mobile
              </th>
              <th col="col">
               Email
              </th>
              <th col="col">
                Password
              </th>
              
            </tr>
          </thead>
          <tbody >
            {this.renderRows()}
          </tbody>
        </table>
                
            </div>
        )
    }
}

export default Validations;
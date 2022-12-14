
//import Redirect from 'react-router-dom';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import React from "react";
import axios from "axios";



export default class Login extends React.Component{

  constructor()

  {
      super();
      this.state={
         
          email:'',
          password:'',
          role:'',
          errors:{}

      }
  }

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [role, setRole] = useState("Employee");
// const [data, setData] = useState("");




  changeEMAILHandler=(e)=>
  {
      this.setState({email:e.target.value})
  }
  changePASSHandler=(e)=>
  {
      this.setState({password:e.target.value})
  }
  changeROLEHandler=(e)=>
  {
      this.setState({role:e.target.value})
  }

  formValidation =() =>{

    const {email,password,role}=this.state;
    let isValid = true;
    const errors = {};
    if(email.trim().length == 0){
        errors.email="Please Enter Email";
        isValid=false;
    }
    if(password.trim().length == 0){
      errors.password="Please Enter Password";
      isValid=false;
  }
    if(role.trim().length == 0){
        errors.role="Please Enter Role";
        isValid=false;
    }
    this.setState({errors});
    console.log(isValid)
    console.log(errors)
    return isValid;

}

onFormSubmit =(e) =>{
    e.preventDefault();
    const isValid =this.formValidation();
    if(isValid ==true){

        this.handleSubmit();
    }

}

  async handleSubmit()
  {
  //console.log('handle submit called')
  //event.preventDefault();
  const token = localStorage.getItem("token");

  let loggedIn=false;
  let RedirectPath="/Dashboard";
  
  if(token != null){
    //alert(token)
    loggedIn=true;
  }

  //console.log(email,password,role);
  const obj={userEmail:this.state.email};

 const result=await axios.post('http://localhost:46044/api/Logins',
   {"email":this.state.email,
    "password":this.state.password,
    "role":this.state.role
   })
   .then(res=> {
       console.log(res.data);
       alert(res.data);
    //   localStorage.setItem("result",res.data);
    //  result = res.data;
   return res.data;
  });
  console.log(this.state.email,this.state.password, this.state.role);
  // result = localStorage.getItem("result");


  if( result===true && this.state.role==="Manager"){
    RedirectPath="/MgrDashboard";
    localStorage.setItem("token","qwerty");
    localStorage.setItem('MgrEmail',this.state.email);
      
    alert("Login Successsful");
    window.location= "/MgrDashboard";
   }
   
   //alert(result)
    else if(result===true && this.state.role==="Employee")
    {
      localStorage.setItem('email',this.state.email);
      localStorage.setItem("token","qwerty");



      alert("Login Successsful");
         window.location= "/Dashboard";
     
    }
    else{
       
        alert('invalid Credetials')
    
    }
}

 


render()
{
return (
    
<div>

    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="text" name="email" value={this.state.email}
             onChange={this.changeEMAILHandler}             
            className="form-control"></input>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="text" name="password" value={this.state.password}
             onChange={this.changePASSHandler}             
            className="form-control"></input>
          </div>
          <div className="form-group mt-3">
            <label>Role</label>
            <select name="role" value={this.state.role} onChange={this.changeROLEHandler}             
            className="form-control">
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={this.onFormSubmit}> 
              Submit
            </button>
            
            {     
                 Object.keys(this.state.errors).map((item)=>{
                 return <div key={item} style={{color:"red"}}>{this.state.errors[item]}</div>
            })}
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
</div>
);
}
}

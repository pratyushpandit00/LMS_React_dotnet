import {React} from "react";
//import Redirect from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("Employee");
const [data, setData] = useState("");
function validateForm() {

  return email.length > 0 && password.length > 0;

}

async function handleSubmit2(event){
  const email = localStorage.getItem("email");
let emp_Id;
  if(email != null){
    alert(email)
  } 
  console.log(email);
try {
 
    const result= await axios.post('http://localhost:46044/api/Leaves/'+email)
    .then(res=> { 
        alert(res.data)
        emp_Id=res.data;
        localStorage.setItem("EmpId",emp_Id);
    return res.data;
    
    });   
} catch (error) {
    console.log(error);
}

}


return (
    
<div>
    

    <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
      
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit2}>
              Submit
            </button>
          </div>
         
        </div>
      </form>
    </div>
</div>
);

}
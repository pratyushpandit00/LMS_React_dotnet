import React from "react";
import axios from "axios";
import MgrFooter from "../Dashboard-Manager/footer";
import MgrHeader from "../Dashboard-Manager/header";
import MgrMenu from "../Dashboard-Manager/menu";
import EmpHeader from "./header";

export default class AddEmp extends React.Component{
    constructor()

    {
        super();
        this.state={
           
            fname:'',
            lname:'',
            email:'',
            password:'',
            conPwd:'',
            date:'',
            gen:'',
            ph:'',
            manID:'',
            noOfLeaves:'',
            errors:{}

        }
    }

    changefNameHandler=(e)=>
    {
       this.setState({fname:e.target.value})
    }

    changelNameHandler=(e)=>
    {
       this.setState({lname:e.target.value})
    }

    changeemailHandler=(e)=>
    {
        this.setState({email:e.target.value})
    }

    changePasswordHandler=(e)=>
    {
        this.setState({password:e.target.value})
    }

    changeConPasswordHandler=(e)=>
    {
        this.setState({conPwd:e.target.value})
    }

    changedateHandler=(e)=>
    {
        this.setState({date:e.target.value})
    }

    changegenHandler=(e)=>
    {
       this.setState({gen:e.target.value})
    }

    changeMobileNoHandler=(e)=>
    {
        this.setState({ph:e.target.value})
    }
    changeManIDHandler=(e)=>
    {
        this.setState({manID:e.target.value})
    }
    changeNoOfLeavesHandler=(e)=>
    {
        this.setState({noOfLeaves:e.target.value})
    }

    
    formValidation =() =>{

        const {fname,lname,email,password,conPwd, date, gen,ph,manID, noOfLeaves}=this.state;
        let isValid = true;
        const errors = {};
        if(fname.trim().length == 0){
            errors.fname ="Please Enter First name";
            isValid=false;
        }
        if(lname.trim().length == 0){
            errors.lname ="Please Enter Last Name";
            isValid=false;
        }
        if(email.trim().length == 0){
            errors.email ="Please Enter Email";
            isValid=false;
        }
        if(password.trim().length == 0){
            errors.password ="Please enter Passward";
            isValid=false;
        }
        if(conPwd.trim().length == 0){
            errors.conPwd ="Please Confirm the Password";
            isValid=false;
        }
        if(date.trim().length == 0){
            errors.date ="Please select end Date";
            isValid=false;
        }
        if(gen.trim().length == 0){
            errors.gen ="Please Gender";
            isValid=false;
        }
        if(ph.trim().length == 0){
            errors.ph="Please Mobile no.";
            isValid=false;
        }
        if(manID.trim().length == 0){
            errors.manID ="Please Manager ID";
            isValid=false;
        }
        if(noOfLeaves.trim().length == 0){
            errors.noOfLeaves ="Please Enter Number of Leaves";
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
            this.saveEmployee();
        }

    }

    async saveEmployee()
    {
       // e.preventDefault();
        console.log('Save Employee method called')
        console.log(this.state.fname,this.state.lname,this.state.ph,this.state.email,this.state.password,this.state.conPwd,this.state.date,this.state.gen,this.state.ph,this.state.ManID,this.state.noOfLeaves)
        const result= await axios.post("http://localhost:46044/api/Employees",
        {
            "empId":0,
            "fname":this.state.fname,
            "lname":this.state.lname,
            "email":this.state.email,
            "password":this.state.password,
            "conPwd":this.state.conPwd,
            "date":this.state.date,
            "gen":this.state.gen,
            "ph":this.state.ph,
            "ManID":this.state.manID,
            "NoOfLeaves":this.state.noOfLeaves          
        });
        console.log(result)
        if(result){
            alert("Employee added succeessfully");
            window.location="/AddEmp";
        }else{
            alert("ERROR:Request Unprocessed!");
        }
    }

    render(){
        return(
<div>
    <EmpHeader/>
    <MgrMenu/>
     <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid"></div>
            <div className="container">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input className="form-control" name="fname"
                            onChange={this.changefNameHandler}
                            value={this.state.fname}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input className="form-control" name="lname"
                            onChange={this.changelNameHandler}
                            value={this.state.lname}/>
                        </div>


                        <div className="form-group">
                            <label>Email Id</label>
                            <input className="form-control" name="email"
                             onChange={this.changeemailHandler}
                            value={this.state.email}/>
                        </div>
                       
                        <div className="form-group">
                            <label>Enter Password</label>
                            <input className="form-control" name="password"
                            onChange={this.changePasswordHandler}
                            value={this.state.password}/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input className="form-control" name="conPwd"
                            onChange={this.changeConPasswordHandler}
                            value={this.state.conPwd}/>
                        </div>
                        <div className="form-group">
                            <label>Date of Joined</label>
                            <input className="form-control" name="date"
                            onChange={this.changedateHandler}
                            value={this.state.date}/>
                        </div>
                        <div className="form-group">
                           <label>Gender</label>
                            <input className="form-control" name="gen"
                            onChange={this.changegenHandler}
                            value={this.state.gen}/>
                        </div>
                        
                        <div className="form-group">
                            <label>Mobile No</label>
                            <input className="form-control" name="ph"
                            onChange={this.changeMobileNoHandler}
                            value={this.state.ph}/>                    
                        </div>
                        <div className="form-group">
                            <label>No Of Leaves</label>
                            <input className="form-control" name="noOfLeaves"
                            onChange={this.changeNoOfLeavesHandler}
                            value={this.state.noOfLeaves}/>

                        </div>
                        <div className="form-group">
                            <label>ManagerID</label>
                            <input className="form-control" name="manID"
                            onChange={this.changeManIDHandler}
                            value={this.state.manID}/>
                        </div>

                        <button className="btn btn-success" onClick={this.onFormSubmit}> Submit </button>

                        {
                             Object.keys(this.state.errors).map((item)=>{
                                return <div key={item} style={{color:"red"}}>{this.state.errors[item]}</div>
                            })}

                    </form>
                </div>
            </div>
        </div>
    </div>
    <MgrFooter/>
</div>
        )
    }
}
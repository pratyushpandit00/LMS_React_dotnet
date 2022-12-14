import React from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LeaveHeader from '../Leave/header';
import LeaveMenu from '../Leave/menu';
import LeaveFooter from '../Leave/footer';

export default class AddLeave extends React.Component{
        constructor(){
            super();
            this.state ={
                lStatus:'',
                lType:'',
                sdate:new Date().toISOString().slice(0,10),
                edate:new Date().toISOString().slice(0,10),
                empID:'',
                manID:'',
                errors:{}      
            }
        }
        
        changesdateHandler =(e)=>
        {
            this.setState({sdate:e.target.value})
        }
        disableStartDates=()=>
        {
            var today,dd,mm,yyyy;
            today=new Date();
            //endt=new Date();
            // enddd=dd;
            // endmm=mm;
            // endyy=yyyy;
            dd= today.getDate();
            mm= today.getMonth()+1;
            yyyy= today.getFullYear();
            // endt= yyyy+"-"+mm+"-"+dd;
            return yyyy+"-"+mm+"-"+dd;
        }
        changeedateHandler =(e)=>
        {
            this.setState({edate:e.target.value})
        }
        disableENDDates=()=>
        {
            var today,dd,mm,yyyy;
            today=new Date();
            dd= today.getDate()+1;
            mm= today.getMonth()+1;
            yyyy= today.getFullYear();
            
            return yyyy+"-"+mm+"-"+dd;
        }
        changelStatusHandler =(e)=>
        {
            this.setState({lStatus:e.target.value})
        }
        changelTypeHandler =(e)=>
        {
            this.setState({lType:e.target.value})
        }
      
        formValidation =() =>{

            const {sdate,edate,lStatus,lType}=this.state;
            let isValid = true;
            const errors = {};
            if(sdate.trim().length == 0){
                errors.sdate ="Please select end Date";
                isValid=false;
            }
            if(edate.trim().length == 0){
                errors.edate ="Please select end Date";
                isValid=false;
            }
            if(lStatus.trim().length == 0){
                errors.lstatus ="Please Enter leave status";
                isValid=false;
            }
            if(lType.trim().length == 0){
                errors.ltype="Please Enter leave Type";
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
                this.saveLeaves();
            }

        }
       
        saveLeaves = async (e) =>
        {
            e.preventDefault();



            const email = localStorage.getItem("email");
            let EmpId;
            let Mgr;
              if(email != null){
                alert(email)
              } 
              console.log(email);
            try {
             
                const result= await axios.post('http://localhost:46044/api/Employees/'+email)
                .then(res=> { 
                    alert(res.data)
                    EmpId=res.data;
                    console.log(EmpId)
                   // this.setState({empID:EmpId})
                    localStorage.setItem("EmpId",EmpId);
                    return res.data;
                
                });   
            } catch (error) {
                console.log(error);
            }

            
            axios.post('http://localhost:46044/api/Logins/'+localStorage.getItem('EmpId'))
            .then(res=> { 
               // alert(res.data)
                Mgr=res.data;
                console.log('manager'+Mgr)
               // this.setState({empID:EmpId})
                localStorage.setItem("Mgr",Mgr);
            return res.data;
            
            });
              
       

            
            console.log("SaveLeaves called");
            console.log(Mgr);
            console.log(this.state.sdate,this.state.edate,this.state.lStatus,this.state.lType,localStorage.getItem('EmpId'),localStorage.getItem('Mgr'));
            const result=await axios.post('http://localhost:46044/api/Leaves',          
            {           
                    "sdate":this.state.sdate,
                    "edate":this.state.edate,
                    "lStatus":'pending',
                    "lType":this.state.lType,
                    "empID":localStorage.getItem('EmpId'),
                    "manID":localStorage.getItem('Mgr')
                    // "EmployeeId":localStorage.getItem('user')
                // })          
                           
            });

            if(result){
                alert(EmpId);
                alert("Submitted Successfully");
                window.location="/AddLeave";
            }else{
                alert("ERROR:Request Unprocessed!");
            }
            // console.log(result);
        }

        render()
        {
            return(
                <>
                <LeaveHeader></LeaveHeader>
                <LeaveMenu></LeaveMenu>
                <Card className='BgColor-Card'>
                <CardContent>
                    
     <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid"></div>
                <div className='container'>
                    <div className='card-body '>
                        <h5><i>Apply For Leave</i></h5>
                        
                        <form>
                            <div className='form-group'>
                                <nobr>
                                <label className='avoidbreakline'>Start Date:</label>
                                <input type='date' className='form-control' name='sdate'
                                 min={this.disableStartDates()} onChange={this.changesdateHandler}
                                value={this.state.sdate}/>
                                </nobr>
                            </div>

                            <div className='form-group'>
                                <label>End Date:</label>
                                <input type='date' className='form-control' name='edate'
                                min={this.disableENDDates()} onChange={this.changeedateHandler}
                                value={this.state.edate}/>
                            </div>

                            <div className='form-group'>
                                <label>Leave Type:</label>
                                <input type='text' className='form-control' name='lType'
                                onChange={this.changelTypeHandler}
                                value={this.state.lType}/>

                            </div>
                            <div className='form-group'>
                                <label>Leave Reason:</label>
                                <input type='textarea' className='form-control' name='leaveReason'
                                onChange={this.changelStatusHandler}
                                value={this.state.lStatus}/>

                            </div>
                            <button className='btn btn-success' onClick={this.onFormSubmit}> Apply</button>
                            {
                             Object.keys(this.state.errors).map((item)=>{
                                return <div key={item} style={{color:"red"}}>{this.state.errors[item]}</div>
                            })}
                        </form>
                    </div>
                </div>
            </div>
        </div>
     
                <LeaveFooter></LeaveFooter>
                </CardContent>
                </Card>
                </>
            )
        }
}
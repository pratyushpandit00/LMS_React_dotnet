import axios from 'axios';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import LeaveHeader from './header';
import MgrMenu from './menu';
export default class ADL extends React.Component
{
    
    constructor(props)
    {
       
      super(props);
      
        this.state=
        {            
            leaves:[]
            
        }
        
    }

      componentDidMount()
    {
      
        const MgrEmail = localStorage.getItem("MgrEmail");
        let mgr_Id;
          
        console.log(MgrEmail);
        try {
            const result=  axios.post('http://localhost:46044/api/Managers/'+MgrEmail)
            .then(res=> { 
               // alert(res.data)
                mgr_Id=res.data;
                localStorage.setItem("MgrId",mgr_Id);
            return res.data;
            
            });   
        } catch (error) {
            console.log(error);
        }


        let MgrId=localStorage.getItem("MgrId");
       // alert(EmpId);
         axios.post('http://localhost:46044/api/Leaves/'+MgrId)
       .then((res) =>{  
            console.log(res.data);

            //             var arr = [];
            // for (var key in res.data) {
            // arr.push(res.data);

            // console.log(arr.length);
            this.setState({leaves:res.data});
}
        )
    
        
  
    }
    render()
    {
        return(
        <div>

            <LeaveHeader/>
            <MgrMenu/>
            <br /><br />
     <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid"></div>
            <div className='row card-body'>

                <table className='table table-striped table-bordered'>

                    <thead>

                        <tr>

                            <th>Apply Leave Id</th>

                            <th>Employee Id</th>

                            <th>Leave Type</th>

                            <th>Start Date</th>

                            <th>End Date</th>

                            <th>Leave Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

     
                    {
                            this.state.leaves.map(
                                
                               (l) =>

                               <tr key ={l.lid}>
                               <td>{l.lid}</td>
                               <td>{l.empID}</td>
                               <td>{l.lType}</td>
                               <td>{l.sdate}</td>
                               <td>{l.edate}</td> 
                               <td style={{background:"red"}}>{l.lStatus}</td>
                            
                        <td><button onClick={function Approve(){
                            localStorage.setItem("id",l.lId);
                            console.log(l.lid);
                            const result=axios.put("http://localhost:46044/api/Leaves/"+l.lid,
                            {
                                "lid":l.lId,
                                "empID":l.empID,
                                "manID":l.manID,
                                "lType":l.lType,
                                "sdate":l.sdate,
                                "edate":l.edate,
                                "lStatus":"approved"                                         
                            });
                            if(result){
                            alert("Approved");
                            window.location="/ManageLeave";
                        }
                        }}>Approve</button>
                               <button onClick={function Deny(){
                              localStorage.setItem("id",l.lId);
                              console.log(l.lid);
                              const result=axios.put("http://localhost:46044/api/Leaves/"+l.lid,
                              {
                                  "lid":l.lId,
                                  "empID":l.empID,
                                  "manID":l.manID,
                                  "lType":l.lType,
                                  "sdate":l.sdate,
                                  "edate":l.edate,
                                  "lStatus":"deny"                                         
                              });
                              if(result){
                              alert("Denied");
                              window.location="/ManageLeave";
                            }
                            }}>Deny</button>
                               </td>
                               </tr>

                            )
                              

                        }
                    </tbody>

                </table>

                                           

            </div>
                        
        </div>
    </div>
    
</div>

    )}

}
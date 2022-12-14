import axios from 'axios';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import LeaveHeader from './header';
export default class ViewEmp extends React.Component
{
    constructor(props)
    {
      super(props);
        this.state=
        {            
            employees:[]
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
                alert(res.data)
                mgr_Id=res.data;
                localStorage.setItem("MgrId",mgr_Id);
            return res.data;
            
            });   
        } catch (error) {
            console.log(error);
        }


        let MgrId=localStorage.getItem("MgrId");
       // alert(EmpId);
         axios.post('http://localhost:46044/api/Employees/'+MgrId)
       .then((res) =>{  
            console.log(res.data);

            //             var arr = [];
            // for (var key in res.data) {
            // arr.push(res.data);

            // console.log(arr.length);
            this.setState({employees:res.data});
}
        )
    }



    render()
    {
        return(
        <div>

            <LeaveHeader/>
         
            <br /><br />
     <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid"></div>
            <div className='row card-body'>

                <table className='table table-striped table-bordered'>

                    <thead>

                        <tr>

                            <th>Apply Leave Id</th>

                            <th>Leave Status</th>

                            <th>Leave Type</th>

                            <th>Start Date</th>

                            <th>End Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {


                            this.state.leaves.map(

                               (l) =>

                               <tr key ={l.lId}>
                               <td>{l.lid}</td>
                               <td>{l.lType}</td>
                               <td>{l.sdate}</td>
                               <td>{l.edate}</td> 
                               <td style={{background:"red"}}>{l.lStatus}</td>
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
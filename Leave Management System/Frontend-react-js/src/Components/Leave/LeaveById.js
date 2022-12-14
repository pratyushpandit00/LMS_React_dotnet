import axios from 'axios';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import LeaveFooter from './footer';
import LeaveHeader from './header';
import LeaveMenu from './menu';
export default class LeaveById extends React.Component
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
        const email = localStorage.getItem("email");
        let emp_Id;
          
        console.log(email);
        try {
            const result=  axios.post('http://localhost:46044/api/Employees/'+email)
            .then(res=> { 
                //alert(res.data)
                emp_Id=res.data;
                localStorage.setItem("EmpId",emp_Id);
            return res.data;
            
            });   
        } catch (error) {
            console.log(error);
        }


        let EmpId=localStorage.getItem("EmpId");
       // alert(EmpId);
         axios.patch('http://localhost:46044/api/Logins/'+localStorage.getItem('EmpId'))
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
            <LeaveMenu/>
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
    <LeaveFooter/>
</div>

    )}

}
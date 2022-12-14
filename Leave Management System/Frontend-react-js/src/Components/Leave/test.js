import axios from 'axios';

import React from 'react';

import {Routes,Route,Link} from 'react-router-dom';

 

export default class ListOfLeaves extends React.Component

 

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

       axios.post('http://localhost:17720/api/Leaves/Leavedetailsbyemployee?eid='+localStorage.getItem('user')).then((res) =>{

            this.setState({leaves:res.data});

        })

       

    }

    newApplication()

    {

        window.location='/applyleave';

    }

 

    render()

    {

        return(

        <div>

            <h2 className='text-center'>List Of Applied Leaves</h2>

            <br /><br />

            <div className='row card-body'>

                <table className='table table-striped table-bordered'>

                    <thead>

                        <tr>

                            <th>Apply Leave Id</th>

                            <th>Start Date</th>

                            <th>End Date</th>

                            <th>Number Of Days</th>

                            <th>Leave Type</th>

                            <th>Status</th>

                            <th>Leave Reason</th>

                            <th>Applied On</th>                          

                            <th>Manager Comments</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.state.leaves.map(

                               leave =>

                               <tr key={leave.leaveDetailsId}>

                                    <td>{leave.leaveDetailsId}</td>

                                    <td>{leave.startDate}</td>

                                    <td>{leave.endDate}</td>

                                    <td>{leave.numberOfDays}</td>

                                    <td>{leave.leaveType}</td>

                                    <td>{leave.status}</td>

                                    <td>{leave.leaveReason}</td>                                    

                                    <td>{leave.appliedOn}</td>                                    

                                    <td>{leave.managerComments}</td>

                                   

                                </tr>

                            )

                        }

                    </tbody>

                </table>

                                           

                <button className='btn btn-primary' onClick={()=>this.newApplication()}>Apply Leave</button>

 

            </div>

        </div>

    )}

}
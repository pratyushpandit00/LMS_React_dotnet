import React from "react";
import LeaveService from "../../Services/LeaveService";

class LeaveListComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            leave:[]
        }
    }

    componentDidMount()

    {
        LeaveService.getLeave().then((e)=>{
          this.setState({leave:e.data});
        })

    }

    render()
    {
        return(
            <div>
                <h2 className="text-center">Leave Application List</h2>
                <br></br>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Leave Status</th>
                            <th>Type of Leave</th>
                            <th>Start Date</th>
                            <th>End date</th>
                        
                        </tr>
                    </thead>  

                        <tbody>
                        {
                             this.state.leave.map(
                                  (l)=>
                                    <tr key ={l.lId}>
                                    <td>{l.lid}</td>
                                    <td>{l.lStatus}</td>
                                    <td>{l.lType}</td>
                                    <td>{l.sdate}</td>
                                    <td>{l.edate}</td>                                   
                                </tr>
) 
                         }
                     </tbody>
                     </table>
                 </div>
                 </div>
         )
    }
}

export default LeaveListComponent;
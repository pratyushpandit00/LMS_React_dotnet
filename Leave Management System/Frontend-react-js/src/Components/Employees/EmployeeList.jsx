import React from "react";
import EmployeeService from "../../Services/EmployeeService"

class EmployeeListComponent extends React.Component{
constructor(props){

    super(props);
    this.state={
        employees:[]
    }
}

componentDidMount(){
    EmployeeService.getEmployees().then((res)=>{
        console.log(res.data);
        this.setState({employees:res.data});
    })
}
    render(){
        return(
            <div>
                <h2 className="text-center">Employee List</h2>
                <br></br>

                <div className="row">
                    <table className="table table-striped table-bordered" >
                        <thead>
                            <tr>
                                <th>EmpId</th>
                                <th>Fname</th>
                                <th>Lname</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>ConPwd</th>
                                <th>Gen</th>
                                <th>Ph</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    emp=>
                                    <tr key={emp.employeeId}>
                                        <td>{emp.empID}</td>
                                        <td>{emp.fname}</td>
                                        <td>{emp.lname}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.password}</td>
                                        <td>{emp.conPwd}</td>
                                        <td>{emp.gen}</td>
                                        <td>{emp.ph}</td>

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
export default EmployeeListComponent;
import axios from "axios";
import { Component } from "react";
const Leave_API_BASE_URL="http://localhost:46044/api/Leaves";

class LeaveService extends Component
{
    
        constructor(props){
            super(props)
        let email=localStorage.getItem("email");
        }
    getLeave()
    {
        return axios.get (Leave_API_BASE_URL);
    }

    getLeaveById (leaveId)
    {
    return axios.get (Leave_API_BASE_URL+'/' +leaveId);
    }

     createLeave(leave)
    {
      return axios.post (Leave_API_BASE_URL ,leave);
    }

    updateLeave(leave, leaveId)
    {
         return axios.put (Leave_API_BASE_URL+"/"+leaveId,leave);
     }

     deleteLeave(leaveId)
    {
     return axios.delete (Leave_API_BASE_URL+"/"+leaveId);
    }
    getEmployeeIdByEmail(email){
        var id = axios.get(Leave_API_BASE_URL+'/'+email,email);
        return id;
        localStorage.setItem("EmpId",id);
    }
}
export default new LeaveService();
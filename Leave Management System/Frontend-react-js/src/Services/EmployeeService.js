import axios from "axios";

const EMPLOYEE_API_BASE_URL="http://localhost:46044/api/Employees";

class EmployeeService{
    constructor(props){
        super(props)
    let email=localStorage.getItem("email");
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);

    }
    getEmployeesById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
    createEmployee(employee){
        return axios.get(EMPLOYEE_API_BASE_URL,employee);
    }
    updateEmployee(employee,employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
    }
    deleteEmployee(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
    
 
}

export default new EmployeeService();
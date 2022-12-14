import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes } from 'react-router-dom';
import Login from './Login/LoginPage';
import Header from './Components/Dashboard-Emp/header';
import MgrHeader from './Components/Dashboard-Manager/header';
import AddLeave from './Components/Leave/AddLeave';
import ViewLeaves from './Components/Leave/ViewLeaves';
import LeaveById from './Components/Leave/LeaveById';
import AddEmp from './Components/Employees/AddEmp';
import ViewEmp from './Components/Employees/viewEmp';
import ADL from './Components/Employees/ViewLeave';




function App() {
  return (
    <div className="wrapper">
     <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/Dashboard' element={<Header/>}></Route>
        <Route path='/MgrDashboard' element={<MgrHeader/>}></Route>
        <Route path='/AddLeave' element={<AddLeave/>}></Route>
        <Route path='/ViewLeaves' element={<ViewLeaves/>}></Route>
        <Route path='/Leaves' element={<LeaveById/>}></Route>
        <Route path='/AddEmp' element={<AddEmp/>}></Route>
        <Route path='/ViewEmp' element={<ViewEmp/>}></Route>
        <Route path='/ManageLeave' element={<ADL/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
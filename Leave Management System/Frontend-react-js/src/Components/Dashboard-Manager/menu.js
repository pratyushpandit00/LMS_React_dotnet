import React, { Component } from 'react';


export default class MgrMenu extends Component{
    render(){
      let data=localStorage.getItem('MgrEmail');
      
      console.log(data);
        return (
            <div>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
<a href="index3.html" className="brand-link">
  <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
  <span className="brand-text font-weight-light">LMS</span>
</a>
<div className="sidebar">
  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
      <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
    </div>
    <div className="info">
      <a href="#" className="d-block">{data}</a>
    </div>
  </div>
  <div className="form-inline">
    <div className="input-group" data-widget="sidebar-search">
      <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-sidebar">
          <i className="fas fa-search fa-fw" />
        </button>
      </div>
    </div>
  </div>
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <li className="nav-item menu-open">
        <a href={"/MgrDashboard"} className="nav-link active">
          <i className="nav-icon fas fa-tachometer-alt" />
          <p>
            Dashboard
            <i className="right fas fa-angle-left" />
          </p>
        </a>
      </li>
      <li className="nav-item">
        <a href={"/AddEmp"} className="nav-link">
          <i className="nav-icon fas fa-pen" />
          <p>
            Add Employee
            <span className="right badge badge-danger">New</span>
          </p>
        </a>
      </li>
     
      <li className="nav-item">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-table" />
          <p>
            Manage Employee
          </p>
        </a>
      </li>
      <li className="nav-header">Leaves</li>
      <li className="nav-item">
      <a href={"/ManageLeave"} className="nav-link">
          <i className="nav-icon fas fa-table" />
          <p>
            Leave Requests
          </p>
        </a>
      </li>
      <li className="nav-header">Profile</li>
      <li className="nav-item">
        <a href="pages/calendar.html" className="nav-link">
          <i className="nav-icon far fa-user" />
          <p>
            Profile            
          </p>
        </a>
      </li>
    </ul>
  </nav>
</div>
</aside>

</div>
        )
    }
}

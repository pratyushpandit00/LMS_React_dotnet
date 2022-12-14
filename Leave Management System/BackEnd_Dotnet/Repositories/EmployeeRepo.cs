using LeaveApp.Interfaces;
using LeaveApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveApp.Context;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace LeaveApp.Repositories
{
    public class EmployeeRepo : IEmployee
    {
        private readonly DataBaseContext dataBaseContext;
        private readonly IMapper mapper;
        public EmployeeRepo(DataBaseContext dataBaseContext,IMapper mapper)
        {
            this.dataBaseContext = dataBaseContext;
            this.mapper = mapper;

        }
         async Task<int> IEmployee.AddEmployees(Employee employees)
        {
            var emp = new Employee()
            {
                EmpID = employees.EmpID,
                Fname = employees.Fname,
                Lname = employees.Lname,
                Email = employees.Email,
                Password = employees.Password,
                ConPwd = employees.ConPwd,
                Gen = employees.Gen,
                Ph = employees.Ph,
                Date = employees.Date
            };
            dataBaseContext.Employees.Add(emp);
            await dataBaseContext.SaveChangesAsync();
            return emp.EmpID;
        }

        async Task<int> IEmployee.DeleteEmployees(int id)
        {
            var del = dataBaseContext.Employees.Where(x => x.EmpID == id).FirstOrDefault();
            if (del != null)
            {
                dataBaseContext.Employees.Remove(del);
            }

            await dataBaseContext.SaveChangesAsync();
            return del.EmpID;
        }

        async Task<List<Employee>> IEmployee.GetEmployees()
        {
            List<Employee> emplst = new List<Employee>();
            var li = await dataBaseContext.Employees.ToListAsync();
            foreach (Employee em in li)
            {
                emplst.Add(new Employee
                {
                    EmpID = em.EmpID,
                    Fname = em.Fname,
                    Lname = em.Lname,
                    Email = em.Email,
                    Password = em.Password,
                    ConPwd = em.ConPwd,
                    Gen = em.Gen,
                    Ph = em.Ph,
                    Date = em.Date
                });
            }
            return emplst;
        }

        async Task<int> IEmployee.UpdateEmployees(int id, Employee employees)
        {
            var upd = dataBaseContext.Employees.Where(x => x.EmpID == id).FirstOrDefault();
            if (upd != null)
            {
                upd.Email = employees.Email;
                upd.Ph = employees.Ph;
            }

            await dataBaseContext.SaveChangesAsync();
            return upd.EmpID;
        }
    }
}

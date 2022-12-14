using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LeaveApp.Context;
using LeaveApp.Models;

namespace LeaveApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public LoginsController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Logins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetLogin()
        {
            return await _context.Login.ToListAsync();
        }

       
        [HttpPost]
        public bool Login(Login login)
        {
            bool result=false;
            if (login.Role == "Employee")
            {
                if (_context.Employees.Any(e => e.Email == login.Email && e.Password == login.Password))
                {
                    _context.Login.Add(login);
                    _context.SaveChangesAsync();

                    result = true;
                }
                else
                {
                    result = false;
                }
            }else if (login.Role == "Manager")
            {
                if (_context.Managers.Any(m => m.Email == login.Email && m.Password == login.Password))
                {
                    _context.Login.Add(login);
                    _context.SaveChangesAsync();

                    result = true;
                }
                else
                {
                    result = false;
                }
            }
            return result;

        }

        [HttpPost("{id}")]
        public string GetMgrIdByEmpId(string id)
        {
            Employee employee = _context.Employees.Where(l => l.EmpID.ToString().Equals(id)).FirstOrDefault();

            return employee.ManID.ToString();
        }

        [HttpPatch("{id}")]
        public async Task<ActionResult<IEnumerable<Leave>>> GetLeaveByEmpId(string id)
        {
            return await _context.Leaves.Where(l => l.EmpID.Equals(id)).ToListAsync();
        }


        private bool LoginExists(int id)
        {
            return _context.Login.Any(e => e.Id == id);
        }
    }
}

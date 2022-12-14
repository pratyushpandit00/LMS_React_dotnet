using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveApp.Models;

namespace LeaveApp.Interfaces
{
    interface ILogin
    {
        Task<int> SignIn(Login login);
    }
}

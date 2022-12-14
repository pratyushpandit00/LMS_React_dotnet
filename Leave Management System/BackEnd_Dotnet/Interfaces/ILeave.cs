using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveApp.Models;

namespace LeaveApp.Interfaces
{
    public interface ILeave
    {

        Task<List<Leave>> LeaveDet();
        Task<int> AddLeaves(Leave leaves);
        Task<int> UpdateLeaves(int id, Leave leaves);
        Task<int> DeleteLeaves(int id);
    }
}

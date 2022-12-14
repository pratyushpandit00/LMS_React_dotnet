using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveApp.Models;

namespace LeaveApp.Interfaces
{
    public interface IManager
    {
        Task<List<Manager>> GetManager();
        Task<int> AddManager(Manager managers);
        Task<int> UpdateManager(int id, Manager managers);
        Task<int> DeleteManager(int id);
    }
}

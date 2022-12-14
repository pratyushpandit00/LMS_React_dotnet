using LeaveApp.Interfaces;
using LeaveApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveApp.Context;
using Microsoft.EntityFrameworkCore;

namespace LeaveApp.Repositories
{
    public class ManagerRepo : IManager
    {
        private readonly DataBaseContext dataBaseContext;

        public ManagerRepo(DataBaseContext dataBaseContext)
        {
            this.dataBaseContext = dataBaseContext;
        }
        public async Task<int> AddManager(Manager managers)
        {
            var man = new Manager()
            {
                ManID = managers.ManID,
                Fname = managers.Fname,
                Lname = managers.Lname,
                Email = managers.Email,
                Password = managers.Password,
                ConPwd = managers.ConPwd,
                Gen = managers.Gen,
                Ph = managers.Ph,
                Date = managers.Date
            };
            dataBaseContext.Managers.Add(man);
            await dataBaseContext.SaveChangesAsync();
            return man.ManID;
        }

        public async Task<int> DeleteManager(int id)
        {

            var ar = dataBaseContext.Managers.Where(x => x.ManID == id).FirstOrDefault();
            if (ar != null)
            {
                dataBaseContext.Managers.Remove(ar);
            }

            await dataBaseContext.SaveChangesAsync();
            return ar.ManID;
        }

        public async Task<List<Manager>> GetManager()
        {

            List<Manager> manlst = new List<Manager>();
            var ar = await dataBaseContext.Managers.ToListAsync();
            foreach (Manager m in ar)
            {
                manlst.Add(new Manager
                {
                    ManID = m.ManID,
                    Fname = m.Fname,
                    Lname = m.Lname,
                    Email = m.Email,
                    Password = m.Password,
                    ConPwd = m.ConPwd,
                    Gen = m.Gen,
                    Ph = m.Ph,
                    Date = m.Date
                });
            }
            return manlst;
        }

        public async Task<int> UpdateManager(int id, Manager managers)
        {

            var ar = dataBaseContext.Managers.Where(x => x.ManID == id).FirstOrDefault();
            if (ar != null)
            {
                ar.Email = managers.Email;
                ar.Ph = managers.Ph;
            }

            await dataBaseContext.SaveChangesAsync();
            return ar.ManID;
        }
    }
}

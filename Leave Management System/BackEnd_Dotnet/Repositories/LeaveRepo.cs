using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveApp.Interfaces;
using LeaveApp.Models;
using LeaveApp.Context;
using Microsoft.EntityFrameworkCore;

namespace LeaveApp.Repositories
{
    public class LeaveRepo : ILeave
    {
        private readonly DataBaseContext dataBaseContext;

        public LeaveRepo(DataBaseContext dataBaseContext)
        {
            this.dataBaseContext = dataBaseContext;
        }
        async Task<int> ILeave.AddLeaves(Leave leaves)
        {
            var le = new Leave()
            {
                LID = leaves.LID,
                LStatus = leaves.LStatus,
                LType = leaves.LType,
                Sdate = leaves.Sdate,
                Edate = leaves.Edate,
                EmpID = leaves.EmpID
            };
            dataBaseContext.Leaves.Add(le);
            await dataBaseContext.SaveChangesAsync();
            return le.LID;
        }

       async Task<int> ILeave.DeleteLeaves(int id)
        {
            var ar = dataBaseContext.Leaves.Where(x => x.LID == id).FirstOrDefault();
            if (ar != null)
            {
                dataBaseContext.Leaves.Remove(ar);
            }

            await dataBaseContext.SaveChangesAsync();
            return ar.LID;
        }

        async Task<List<Leave>> ILeave.LeaveDet()
        {
            List<Leave> leavelst = new List<Leave>();
            var ar = await dataBaseContext.Leaves.ToListAsync();
            foreach (Leave le in ar)
            {
                leavelst.Add(new Leave
                {
                    LID = le.LID,
                    LStatus = le.LStatus,
                    LType = le.LType,
                    Sdate = le.Sdate,
                    Edate = le.Edate,
                    EmpID = le.EmpID
                });
            }

            return leavelst;
        }

        async Task<int> ILeave.UpdateLeaves(int id, Leave leaves)
        {
            var ar = dataBaseContext.Leaves.Where(x => x.LID == id).FirstOrDefault();
            if (ar != null)
            {

                ar.LStatus = leaves.LStatus;
                ar.LType = leaves.LType;
                ar.Sdate = ar.Sdate;
                ar.Edate = ar.Edate;
                ar.EmpID = ar.EmpID;
            }

            await dataBaseContext.SaveChangesAsync();
            return ar.LID;
        }
    }
}

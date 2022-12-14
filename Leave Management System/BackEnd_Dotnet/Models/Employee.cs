using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LeaveApp.Models
{
    public class Employee
    {
        [Required]
        [Key]
        [Display(Name = "EmployeeID")]
        public int EmpID { get; set; }
        [Required]
        [Display(Name = "First Name")]
        public string Fname { get; set; }
        [Required]
        [Display(Name = "Last Name")]
        public string Lname { get; set; }
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
        [Required]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        [Display(Name = "Confirm Password")]
        [Compare("Password")]
        [DataType(DataType.Password)]
        public string ConPwd { get; set; }
        [Required]
        [Display(Name = "Gender")]
        public string Gen { get; set; }
        [Required]
        [Display(Name = "Phone")]
        public string Ph { get; set; }
        [Required]
        [Display(Name = "DOB")]
        [DataType(DataType.Date)]
        public string Date { get; set; }
        public string NoOfLeaves { get;set; }

        [ForeignKey("ManID")]
        public string? ManID { get; set; }
      //  public virtual Manager MID { get; set; }
    }
}

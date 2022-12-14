using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveApp.Models
{
    public class Leave
    {
        [Required]
        [Key]
        [Display(Name = "LeaveID")]
        public int LID { get; set; }
        [Required]
        [Display(Name = "Leave Status")]
        public string LStatus { get; set; }
        [Required]
        [Display(Name = "Leave Type")]
        public string LType { get; set; }
        [Required]
        [Display(Name = "Start Date")]
        [DataType(DataType.Date)]
        public string Sdate { get; set; }
        [Required]
        [Display(Name = "End Date")]
        [DataType(DataType.Date)]
        public string Edate { get; set; }
        [ForeignKey("ManID")]
        public string? ManID { get; set; }
        [ForeignKey("EmpID")]
        public string? EmpID { get; set; }
    }
}

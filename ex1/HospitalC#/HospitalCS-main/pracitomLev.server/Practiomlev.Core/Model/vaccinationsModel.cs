using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiomLev.Core.Model
{
    public class vaccinationsModel
    {
        public int Id { get; set; }
        public int patientId { get; set; }
        //public string TzPerson { get; set; }
        public DateTime DateOfVaccination { get; set; }
        public int ManufacturerId { get; set; }
    }
}

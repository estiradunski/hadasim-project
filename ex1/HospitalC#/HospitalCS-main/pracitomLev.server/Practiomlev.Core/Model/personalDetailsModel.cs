using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiomLev.Core.Model
{
    public class personalDetailsModel
    {
        public int patientId { get; set; }
        public string TzPerson { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int CityId { get; set; }
        public string Street { get; set; }
        public int NumberHouse { get; set; }
        public DateTime? BirthDate { get; set; }
        public string? Phone { get; set; }
        public string MobilePhone { get; set; }
        public bool Manager { get; set; }
        public DateTime? PositiveResult { get; set; }
        public DateTime? Recovery { get; set; }

        public List<vaccinationsModel>? ArrVaccinations { get; set; }
        public int NumOfVaccinations { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practiomLev.DATA.Model
{
    [Table("PersonalDetails")]
    public class PersonalDetails
    {
        [Key]
        public int patientId { get; set; }
        [MaxLength(9)]
        [MinLength(9)]
        [RegularExpression("^[0-9]+$")]
        public string TzPerson { get; set; }
        [StringLength(100)]
        [RegularExpression(@"^[\u0590-\u05FF]+$")]
        public string FirstName { get; set; }

        [StringLength(100)]
        [RegularExpression(@"^[\u0590-\u05FF]+$")]
        public string LastName { get; set; }
        public int CityId { get; set; }
        [StringLength(100)]
        [RegularExpression(@"^[\u0590-\u05FF]+$")]
        public string Street { get; set; }
        public int NumberHouse { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime? BirthDate { get; set; }
        [MaxLength(10)]
        [MinLength(9)]
        [RegularExpression("^[0-10]+$")]
        public string? Phone { get; set; }
        [MaxLength(10)]
        [MinLength(10)]
        [RegularExpression("^[0-10]+$")]
        public string MobilePhone { get; set; }
        public bool Manager { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime? PositiveResult { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime? Recovery { get; set; }

        public List<Vaccinations>? ArrVaccinations { get; set;}
        public int NumOfVaccinations { get; set; }

        [ForeignKey(nameof(CityId))]
        public City city { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practiomLev.DATA.Model
{
    [Table("Vaccinations")]
    public class Vaccinations
    {
        [Key]
        public int Id { get; set; }
        public int patientId { get; set; }
        //[MaxLength(9)]
        //[MinLength(9)]
        //[RegularExpression("^[0-9]+$")]
        //public string TzPerson { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateOfVaccination { get; set; }
        public int ManufacturerId { get; set; }

        [ForeignKey(nameof(patientId))]
        public PersonalDetails personalDetails { get; set; }

        [ForeignKey(nameof(ManufacturerId))]
        public Manufacturers manufacturers { get; set; }
    }
}

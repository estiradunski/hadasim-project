using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practiomLev.DATA.Model
{
    [Table("City")]
    public class City
    {
        [Key]

        public int CityId { get; set; }
        [StringLength(100)]
        [RegularExpression(@"^[\u0590-\u05FF]+$")]
        public string CityName { get; set; }
    }
}

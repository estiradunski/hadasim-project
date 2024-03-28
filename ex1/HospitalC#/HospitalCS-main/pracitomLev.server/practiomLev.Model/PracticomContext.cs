using Microsoft.EntityFrameworkCore;
using NPOI.SS.Formula.Functions;
using practiomLev.DATA.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practiomLev.DATA
{
    public class PracticomContext:DbContext
    {


        public PracticomContext(DbContextOptions option):base(option)
        {

        }

        
        public DbSet<Manufacturers> Manufacturers { get; set; }

        public DbSet<City> City { get; set; }
        public DbSet<PersonalDetails> PersonalDetails { get; set; }
        public DbSet<Vaccinations> Vaccinations { get; set; }

        

    }
}

using practiomLev.Core.response;
using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiomLev.Core.Interface.DAL
{
    public interface IManufacturersRepository
    {
        public BaseResponse DeleteManufacturers(int ManufacturerId);
        public manufacturersModel addManufacturer(manufacturersModel patientModel);
        public List<manufacturersModel> getManufacturers();
        public BaseResponse updateManufacturers(manufacturersModel ManufacturersModel);
    }
}

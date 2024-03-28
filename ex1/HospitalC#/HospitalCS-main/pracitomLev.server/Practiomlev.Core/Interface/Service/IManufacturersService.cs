using practiomLev.Core.response;
using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiomLev.Core.Interface.Service
{
    public interface IManufacturersService
    {
        public BaseResponse DeleteManufacturers(int ManufacturerId);
        public manufacturersModel addManufacturer(manufacturersModel manufacturersModel);
        public List<manufacturersModel> getManufacturers();
        public BaseResponse updateManufacturers(manufacturersModel ManufacturersModel);
    }
}

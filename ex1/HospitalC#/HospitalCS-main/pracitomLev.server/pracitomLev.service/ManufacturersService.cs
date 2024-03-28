using practiomLev.Core.response;
using PractiomLev.Core.Interface.DAL;
using PractiomLev.Core.Interface.Service;
using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pracitomLev.service
{
    public class ManufacturersService : IManufacturersService
    {
        readonly IManufacturersRepository _manufacturersRepository;

        public ManufacturersService(IManufacturersRepository manufacturersRepository)
        {
            _manufacturersRepository = manufacturersRepository;
        }

        public manufacturersModel addManufacturer(manufacturersModel manufacturersModel)
        {
            return _manufacturersRepository.addManufacturer(manufacturersModel);
        }
        public BaseResponse DeleteManufacturers(int ManufacturerId)
        {
            return _manufacturersRepository.DeleteManufacturers(ManufacturerId);

        }
        public List<manufacturersModel> getManufacturers()
        {
            return _manufacturersRepository.getManufacturers();
        }
        public BaseResponse updateManufacturers(manufacturersModel manufacturersModel)
        {
            return _manufacturersRepository.updateManufacturers(manufacturersModel);

        }
    }
}

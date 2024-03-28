using practiomLev.Core.response;
using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiomLev.Core.Interface.DAL
{
    public interface ICityRepository
    {
        public BaseResponse deleteCity(int CityId);
        public cityModel addCity(cityModel CityModel);
        public List<cityModel> getAllCity();
        public cityModel getCity(int CityId);
        public BaseResponse updateCity(cityModel CityModel);
    }
}

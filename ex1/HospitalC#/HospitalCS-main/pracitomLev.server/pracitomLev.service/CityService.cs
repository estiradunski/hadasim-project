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
    public class CityService : ICityService
    {
        readonly ICityRepository _cityRepository;

        public CityService(ICityRepository cityRepository)
        {
            _cityRepository = cityRepository;
        }

        public cityModel addCity(cityModel cityModel)
        {
            return _cityRepository.addCity(cityModel);
        }
        public BaseResponse deleteCity(int cityId)
        {
            return _cityRepository.deleteCity(cityId);

        }
        public List<cityModel> getAllCity()
        {
            return _cityRepository.getAllCity();
        }
        public cityModel getCity(int cityId)
        {
            return _cityRepository.getCity(cityId);
        }
        public BaseResponse updateCity(cityModel cityModel)
        {
            return _cityRepository.updateCity(cityModel);

        }
    }
}

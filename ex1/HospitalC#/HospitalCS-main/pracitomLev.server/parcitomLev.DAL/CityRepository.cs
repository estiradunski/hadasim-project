using AutoMapper;
using practiomLev.Core.response;
using practiomLev.DATA;
using practiomLev.DATA.Model;
using PractiomLev.Core.Interface.DAL;
using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace parcitomLev.DAL
{
    public class CityRepository: ICityRepository
    {
        readonly PracticomContext _PracticomContext;
        readonly IMapper _mapper;

        public CityRepository(PracticomContext practicomContext, IMapper mapper)
        {
            _PracticomContext = practicomContext;
            _mapper = mapper;
        }
        public cityModel addCity(cityModel cityModel)
        {
            try
            {
                City city = _mapper.Map<City>(cityModel);
                _PracticomContext.City.Add(city);
                _PracticomContext.SaveChanges();
                return _mapper.Map<cityModel>(city);
            }
            catch
            {
                throw new Exception("faild to add City");
            }
        }
        public BaseResponse deleteCity(int cityId)
        {
            try
            {
                if (_PracticomContext.City.Any(c => c.CityId == cityId))
                {

                    City City = _PracticomContext.City.First(c => c.CityId == cityId);
                    
                    _PracticomContext.City.Remove(City);

                }
      
                _PracticomContext.SaveChanges();
                BaseResponse baseResponse = new BaseResponse();
                return baseResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine("error:" + ex.Message);
                BaseResponse baseResponse = new BaseResponse(ex.Message);
                return baseResponse;
            }
        }
        public List<cityModel> getAllCity()
        {

            List<City> cities = new List<City>();

            try
            {
                cities = _PracticomContext.City.ToList();

                return _mapper.Map<List<cityModel>>(cities); ;
            }
            catch (Exception ex)
            {
                Console.WriteLine("no exist cities" + ex);
                return _mapper.Map<List<cityModel>>(cities);
            }
            
        }
        public cityModel getCity(int cityId)
        {
            City city = new City();

            try
            {
                    city = _PracticomContext.City.First(c => c.CityId == cityId);
                    return _mapper.Map<cityModel>(city); ;

               
            }
            catch (Exception ex)
            {
                Console.WriteLine("error:" + ex.Message);
                return _mapper.Map<cityModel>(city); ;

            }

        }
        public BaseResponse updateCity(cityModel cityModel)
        {
            try
            {
                City cityNew = _mapper.Map<City>(cityModel);
                City cityOld = _PracticomContext.City.Find(cityModel.CityId);

                cityOld.CityId = cityOld.CityId;
                cityOld.CityName = cityNew.CityName;

                _PracticomContext.City.Update(cityOld);
                _PracticomContext.SaveChanges();

                BaseResponse baseResponse = new BaseResponse();
                return baseResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine("error:" + ex.Message);
                BaseResponse baseResponse = new BaseResponse(ex.Message);
                return baseResponse;
            }
        }
    }
}

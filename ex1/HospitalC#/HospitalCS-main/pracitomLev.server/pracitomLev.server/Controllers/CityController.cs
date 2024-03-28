using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using pracitomLev.API.DTO;
using practiomLev.Core.response;
using PractiomLev.Core.Interface.Service;
using PractiomLev.Core.Model;

namespace pracitomLev.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController: ControllerBase
    {
        private readonly IMapper _mapper;
        readonly ICityService _cityService;


        public CityController(IMapper mapper, ICityService cityService)
        {
            _mapper = mapper;
            _cityService = cityService;
        }
        [HttpPost]
        public BaseResponseEntity<CityDTO> addCity([FromBody] CityDTO cityDTO)
        {
            cityModel cityModel = _mapper.Map<cityModel>(cityDTO);
            cityModel = _cityService.addCity(cityModel); // וזה בשביל ההלוך ?
            CityDTO DTO = _mapper.Map<CityDTO>(cityModel);
            BaseResponseEntity<CityDTO> response = new BaseResponseEntity<CityDTO>(); //זה בשביל החזור ?
            response.Entity = DTO;
            return response;
        }
        [HttpDelete]
        [Route("{cityId}")]
        public BaseResponse deletecity([FromRoute] int cityId)
        {
            //relativeModel relativeModel = _mapper.Map<relativeModel>(RelativeDTO);
            return _cityService.deleteCity(cityId);
        }
        [HttpGet]
        public BaseResponseEntity<List<CityDTO>> getAllCity()
        {
            List<cityModel> cityModels = new List<cityModel>();
            cityModels = _cityService.getAllCity();
            List<CityDTO> DTOCity = _mapper.Map<List<CityDTO>>(cityModels);
            BaseResponseEntity<List<CityDTO>> response = new BaseResponseEntity<List<CityDTO>>();
            response.Entity = DTOCity;
            return response;
        }
        [HttpGet]
        [Route("{cityId}")]
        public BaseResponseEntity<CityDTO> getCity(int cityId)
        {

            cityModel cityModel = _cityService.getCity(cityId);
            CityDTO DTOcity = _mapper.Map<CityDTO>(cityModel);
            BaseResponseEntity<CityDTO> response = new BaseResponseEntity<CityDTO>();
            response.Entity = DTOcity;
            return response;
        }

        [HttpPut]
        public BaseResponse UpdateCity([FromBody] CityDTO CityDTO)
        {
            cityModel cityModel = _mapper.Map<cityModel>(CityDTO);
            return _cityService.updateCity(cityModel);
        }
    }
}

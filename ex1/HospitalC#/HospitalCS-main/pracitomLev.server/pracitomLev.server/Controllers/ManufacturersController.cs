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
    public class ManufacturersController: ControllerBase
    {
        private readonly IMapper _mapper;
        readonly IManufacturersService _manufacturersService;


        public ManufacturersController(IMapper mapper, IManufacturersService manufacturersService)
        {
            _mapper = mapper;
            _manufacturersService = manufacturersService;
        }
        [HttpPost]
        public BaseResponseEntity<ManufacturersDTO> addManufacturer([FromBody] ManufacturersDTO ManufacturersDTO)
        {
            manufacturersModel manufacturersModel = _mapper.Map<manufacturersModel>(ManufacturersDTO);
            manufacturersModel = _manufacturersService.addManufacturer(manufacturersModel); // וזה בשביל ההלוך ?
            ManufacturersDTO DTO = _mapper.Map<ManufacturersDTO>(manufacturersModel);
            BaseResponseEntity<ManufacturersDTO> response = new BaseResponseEntity<ManufacturersDTO>(); //זה בשביל החזור ?
            response.Entity = DTO;
            return response;
        }
        [HttpDelete]
        [Route("{manufacturerId}")]
        public BaseResponse DeleteManufacturers([FromRoute] int manufacturerId)
        {
            //relativeModel relativeModel = _mapper.Map<relativeModel>(RelativeDTO);
            return _manufacturersService.DeleteManufacturers(manufacturerId);
        }
        [HttpGet]
        public BaseResponseEntity<List<ManufacturersDTO>> GetManufacturers()
        {
            List<manufacturersModel> ManufacturersModels = new List<manufacturersModel>();
            ManufacturersModels = _manufacturersService.getManufacturers();
            List<ManufacturersDTO> DTOManufacturers = _mapper.Map<List<ManufacturersDTO>>(ManufacturersModels);
            BaseResponseEntity<List<ManufacturersDTO>> response = new BaseResponseEntity<List<ManufacturersDTO>>();
            response.Entity = DTOManufacturers;
            return response;
        }
        [HttpPut]
        public BaseResponse UpdateManufacturers([FromBody] ManufacturersDTO ManufacturersDTO)
        {
            manufacturersModel manufacturersModel = _mapper.Map<manufacturersModel>(ManufacturersDTO);
            return _manufacturersService.updateManufacturers(manufacturersModel);
        }
    }
}

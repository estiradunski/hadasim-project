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
    public class PersonalDetailsController: ControllerBase
    {
        private readonly IMapper _mapper;
        readonly IPersonalDetailsService _personalDetailsService;
        readonly IVaccinationsService _vaccinationsService;
        readonly IManufacturersService _manufacturersService;


        public PersonalDetailsController(IMapper mapper, IPersonalDetailsService personalDetailsService,
            IVaccinationsService vaccinationsService,IManufacturersService manufacturersService)
        {
            _mapper = mapper;
            _personalDetailsService = personalDetailsService;
            _vaccinationsService = vaccinationsService;
            _manufacturersService = manufacturersService;
        }
        [HttpPost]
        public BaseResponseEntity<personalDetailsDTO> addPatient([FromBody] personalDetailsDTO personalDetailsDTO)
        {
            personalDetailsModel personalDetailsModel = _mapper.Map<personalDetailsModel>(personalDetailsDTO);
            personalDetailsModel = _personalDetailsService.addPatient(personalDetailsModel); // וזה בשביל ההלוך ?
            personalDetailsDTO DTO = _mapper.Map<personalDetailsDTO>(personalDetailsModel);
            BaseResponseEntity<personalDetailsDTO> response = new BaseResponseEntity<personalDetailsDTO>(); //זה בשביל החזור ?
            response.Entity = DTO;
            return response;
        }
        [HttpDelete]
        [Route("{TzPerson}")]
        public BaseResponse deletePersonalDetails([FromRoute] string TzPerson)
        {
            //relativeModel relativeModel = _mapper.Map<relativeModel>(RelativeDTO);
            return _personalDetailsService.deletePersonalDetails(TzPerson);
        }
        [HttpGet]

        public BaseResponseEntity<List<personalDetailsDTO>> getALLPersonalDetails()
        {
            List<personalDetailsModel> personalDetailsModels = new List<personalDetailsModel>();
            personalDetailsModels = _personalDetailsService.getALLPersonalDetails();
            List<personalDetailsDTO> DTOPersonalDetails = _mapper.Map<List<personalDetailsDTO>>(personalDetailsModels);

            DTOPersonalDetails.ForEach(x =>
            {
                x.ArrVaccinations = _vaccinationsService.getVaccinations(x.patientId);
                //x.ArrVaccinations.ForEach(y =>
                //{
                //    y.ManufacturerId = _manufacturersService.getManufacturers(y.ManufacturerId)
                //});
            });

            BaseResponseEntity<List<personalDetailsDTO>> response = new BaseResponseEntity<List<personalDetailsDTO>>();

            response.Entity = DTOPersonalDetails;
            return response;
        }
        [HttpGet]
        [Route("{TzPerson}")]
        public BaseResponseEntity<personalDetailsDTO> getPersonalDetails(string TzPerson)
        {
            personalDetailsModel personalDetailsModels = _personalDetailsService.getPersonalDetails(TzPerson);
            personalDetailsDTO DTOPersonalDetails = _mapper.Map<personalDetailsDTO>(personalDetailsModels);
            BaseResponseEntity<personalDetailsDTO> response = new BaseResponseEntity<personalDetailsDTO>();
            response.Entity = DTOPersonalDetails;
            return response;
        }
        [HttpPut]
        public BaseResponse UpdatePersonalDetails([FromBody] personalDetailsDTO personalDetailsDTO)
        {
            personalDetailsModel personalDetailsModel = _mapper.Map<personalDetailsModel>(personalDetailsDTO);
            return _personalDetailsService.updatePersonalDetails(personalDetailsModel);
        }
    }
}

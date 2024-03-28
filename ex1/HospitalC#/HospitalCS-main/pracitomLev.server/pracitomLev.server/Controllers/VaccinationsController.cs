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
    public class VaccinationsController: ControllerBase
    {
        private readonly IMapper _mapper;
        readonly IVaccinationsService _vaccinationsService;


        public VaccinationsController(IMapper mapper, IVaccinationsService vaccinationsService)
        {
            _mapper = mapper;
            _vaccinationsService = vaccinationsService;
        }
        [HttpPost]
        public BaseResponseEntity<VaccinationsDTO> addVaccinations([FromBody] VaccinationsDTO VaccinationsDTO)
        {
            vaccinationsModel vaccinationsModel = _mapper.Map<vaccinationsModel>(VaccinationsDTO);
            vaccinationsModel = _vaccinationsService.addVaccination(vaccinationsModel); // וזה בשביל ההלוך ?
            VaccinationsDTO DTO = _mapper.Map<VaccinationsDTO>(vaccinationsModel);
            BaseResponseEntity<VaccinationsDTO> response = new BaseResponseEntity<VaccinationsDTO>(); //זה בשביל החזור ?
            response.Entity = DTO;
            return response;
        }
        [HttpDelete]
        [Route("{IdPatient}/{dateTime}")]
        public BaseResponse DeleteVaccinations([FromRoute] int IdPatient, DateTime dateTime)
        {
            //relativeModel relativeModel = _mapper.Map<relativeModel>(RelativeDTO);
            return _vaccinationsService.DeleteVaccinations(IdPatient, dateTime);
        }
        [HttpGet]
        [Route("{PatientId}")]
        public BaseResponseEntity<List<VaccinationsDTO>> GetVaccinations(int PatientId)
        {

            List<vaccinationsModel> vaccinationsModels = _vaccinationsService.getVaccinations(PatientId);
            List<VaccinationsDTO> DTOVaccinations = _mapper.Map<List<VaccinationsDTO>>(vaccinationsModels);
            BaseResponseEntity<List<VaccinationsDTO>> response = new BaseResponseEntity<List<VaccinationsDTO>>();
            response.Entity = DTOVaccinations;
            return response;
        }
        [HttpPut]
        public BaseResponse UpdateVaccinations([FromBody] VaccinationsDTO VaccinationsDTO)
        {
            vaccinationsModel vaccinationsModel = _mapper.Map<vaccinationsModel>(VaccinationsDTO);
            return _vaccinationsService.updateVaccinations(vaccinationsModel);
        }
    }
}

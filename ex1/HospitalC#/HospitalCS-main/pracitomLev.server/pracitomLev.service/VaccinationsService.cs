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
    public class VaccinationsService : IVaccinationsService
    {
        readonly IVaccinationsRepository _vaccinationsRepository;

        public VaccinationsService(IVaccinationsRepository vaccinationsRepository)
        {
            _vaccinationsRepository = vaccinationsRepository;
        }

        public vaccinationsModel addVaccination(vaccinationsModel vaccinationsModel)
        {
            return _vaccinationsRepository.addVaccination(vaccinationsModel);
        }
        public BaseResponse DeleteVaccinations(int IdPatient, DateTime dateTime)
        {
            return _vaccinationsRepository.DeleteVaccinations(IdPatient, dateTime);

        }
        public List<vaccinationsModel> getVaccinations(int PatientId)
        {
            return _vaccinationsRepository.getVaccinations(PatientId);
        }
        public BaseResponse updateVaccinations(vaccinationsModel vaccinationsModel)
        {
            return _vaccinationsRepository.updateVaccinations(vaccinationsModel);

        }
    }
}

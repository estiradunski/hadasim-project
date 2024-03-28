using practiomLev.Core.response;
using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiomLev.Core.Interface.DAL
{
    public interface IVaccinationsRepository
    {
        public BaseResponse DeleteVaccinations(int IdPatient, DateTime dateTime);
        public vaccinationsModel addVaccination(vaccinationsModel patientModel);
        public List<vaccinationsModel> getVaccinations(int PatientId);
        public BaseResponse updateVaccinations(vaccinationsModel VaccinationsModel);
    }
}

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
    public class PersonalDetailsService:IPersonalDetailsService
    {

        readonly IPersonalDetailsRepository _personalDetailsRepository;

        public PersonalDetailsService(IPersonalDetailsRepository personalDetailsRepository)
        {
            _personalDetailsRepository = personalDetailsRepository;
        }

        public personalDetailsModel addPatient(personalDetailsModel patientModel)
        {
            return _personalDetailsRepository.addPatient(patientModel);
        }

        public BaseResponse deletePersonalDetails(string TzPerson)
        {
            return _personalDetailsRepository.deletePersonalDetails(TzPerson);

        }

        public List<personalDetailsModel> getALLPersonalDetails()
        {
            return _personalDetailsRepository.getALLPersonalDetails();
        }
        public personalDetailsModel getPersonalDetails(string TzPerson)
        {
            return _personalDetailsRepository.getPersonalDetails(TzPerson);
        }

        public BaseResponse updatePersonalDetails(personalDetailsModel personalDetailsModel)
        {
               return _personalDetailsRepository.updatePersonalDetails(personalDetailsModel);    

        }


        //public List<CaseHandlerModel> getCaseHandlers()
        //{
        //    return _caseHandlersRepository.getCaseHandlers();
        //}

        //public BaseResponse updateCaseHandlers(CaseHandlerModel caseHandlerModel)
        //{
        //    return _caseHandlersRepository.updateCaseHandlers(caseHandlerModel);    
        //}
    }
}

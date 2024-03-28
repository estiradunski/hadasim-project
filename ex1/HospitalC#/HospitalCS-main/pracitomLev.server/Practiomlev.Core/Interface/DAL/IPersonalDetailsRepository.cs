using practiomLev.Core.response;
using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiomLev.Core.Interface.DAL
{
    public interface IPersonalDetailsRepository
    {
        public List<personalDetailsModel> getALLPersonalDetails();
        public personalDetailsModel getPersonalDetails(string TzPerson);
        public BaseResponse updatePersonalDetails(personalDetailsModel personalDetailsModel);
        public BaseResponse deletePersonalDetails(string TzPerson);
       public personalDetailsModel addPatient(personalDetailsModel patientModel);

    }
}

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
    public class VaccinationsRepository: IVaccinationsRepository
    {
        readonly PracticomContext _PracticomContext;
        readonly IMapper _mapper;

        public VaccinationsRepository(PracticomContext practicomContext, IMapper mapper)
        {
            _PracticomContext = practicomContext;
            _mapper = mapper;
        }
     
        public vaccinationsModel addVaccination(vaccinationsModel vaccinationsModel)
        {
            try
            {
                PersonalDetails personalDetailsOld =
                    _PracticomContext.PersonalDetails.First(r => r.patientId == vaccinationsModel.patientId);


                Vaccinations vaccinations = _mapper.Map<Vaccinations>(vaccinationsModel);
                personalDetailsOld.NumOfVaccinations = personalDetailsOld.NumOfVaccinations+1;
                _PracticomContext.PersonalDetails.Update(personalDetailsOld);
                _PracticomContext.Vaccinations.Add(vaccinations);
                _PracticomContext.SaveChanges();
                return _mapper.Map<vaccinationsModel>(vaccinations);
            }
            catch
            {
                throw new Exception("faild to add Vaccination");
            }
        }
        public BaseResponse DeleteVaccinations(int IdPatient, DateTime dateTime)
        {
            try
            {
                if (_PracticomContext.Vaccinations.Any(c => c.patientId == IdPatient))
                {
                    
                    Vaccinations Vaccinations = _PracticomContext.Vaccinations.First(c => c.patientId == IdPatient&&c.DateOfVaccination==dateTime);

                    _PracticomContext.Vaccinations.Remove(Vaccinations);
                    //
                    PersonalDetails personalDetailsOld =
                    _PracticomContext.PersonalDetails.First(r => r.patientId == Vaccinations.patientId);
                    personalDetailsOld.NumOfVaccinations = personalDetailsOld.NumOfVaccinations - 1;
                    _PracticomContext.PersonalDetails.Update(personalDetailsOld);


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
        public List<vaccinationsModel> getVaccinations(int PatientId)
        {

            List<Vaccinations> Vaccinations = new List<Vaccinations>();

            try
            {
                Vaccinations=_PracticomContext.Vaccinations.Where(c => c.patientId == PatientId).ToList();  

                return _mapper.Map<List<vaccinationsModel>>(Vaccinations); 
            }
            catch (Exception ex)
            {
                Console.WriteLine("no exist Vaccinations" + ex);
                return _mapper.Map<List<vaccinationsModel>>(Vaccinations);
            }


        }
        public BaseResponse updateVaccinations(vaccinationsModel vaccinationsModel)
        {
            try
            {
                Vaccinations vaccinationsNew = _mapper.Map<Vaccinations>(vaccinationsModel);
                Vaccinations vaccinationsOld = _PracticomContext.Vaccinations.Find(vaccinationsModel.Id);

                vaccinationsOld.Id = vaccinationsOld.Id;
                vaccinationsOld.DateOfVaccination = vaccinationsNew.DateOfVaccination;
                vaccinationsOld.ManufacturerId = vaccinationsNew.ManufacturerId;
                vaccinationsOld.patientId = vaccinationsOld.patientId;


                _PracticomContext.Vaccinations.Update(vaccinationsOld);
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

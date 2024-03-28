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
    public class PersonalDetailsRepository : IPersonalDetailsRepository
    {

        readonly PracticomContext _PracticomContext;
        readonly IMapper _mapper;

        public PersonalDetailsRepository(PracticomContext practicomContext, IMapper mapper)
        {
            _PracticomContext = practicomContext;
            _mapper = mapper;
        }

        public personalDetailsModel addPatient(personalDetailsModel patientModel)
        {
            try
            {
                PersonalDetails patient = _mapper.Map<PersonalDetails>(patientModel);
                _PracticomContext.PersonalDetails.Add(patient);
                _PracticomContext.SaveChanges();
                return _mapper.Map<personalDetailsModel>(patient);
            }
            catch
            {
                throw new Exception("faild to add patient");
            }
        }

        public BaseResponse deletePersonalDetails(string TzPerson)
        {
            try
            {
                if (_PracticomContext.PersonalDetails.Any(c => c.TzPerson == TzPerson))
                {

                    PersonalDetails PersonalDetails = _PracticomContext.PersonalDetails.First(c => c.TzPerson == TzPerson);
                    if (PersonalDetails.NumOfVaccinations != null)
                    {
                        List<Vaccinations> vac = new List<Vaccinations>();
                        vac = _PracticomContext.Vaccinations.Where(c => c.patientId == PersonalDetails.patientId).ToList();
                        foreach (var v in vac)
                        {
                            _PracticomContext.Vaccinations.Remove(v);
                        }
                    }
                    _PracticomContext.PersonalDetails.Remove(PersonalDetails);

                }
                //Vaccinations vaccinations = _PracticomContext.Vaccinations.First(c => c.CaseHandlerId == CaseHandlerId);
                //_PracticomContext.CaseHandler.Remove(caseHandler);
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



        public List<personalDetailsModel> getALLPersonalDetails()
        {

            List<PersonalDetails> pD = new List<PersonalDetails>();

            try
            {
                pD = _PracticomContext.PersonalDetails.ToList();
           

                return _mapper.Map<List<personalDetailsModel>>(pD); ;
            }
            catch (Exception ex)
            {
                Console.WriteLine("no exist PersonalDetails" + ex);
                return _mapper.Map<List<personalDetailsModel>>(pD);
            }
        }
        public personalDetailsModel getPersonalDetails(string TzPerson)
        {

            PersonalDetails PersonalDetails = new PersonalDetails();

            try
            {
                PersonalDetails = _PracticomContext.PersonalDetails.First(c => c.TzPerson == TzPerson);
                return _mapper.Map<personalDetailsModel>(PersonalDetails); ;
            }
            catch (Exception ex)
            {
                Console.WriteLine("no exist PersonalDetails" + ex);
                return _mapper.Map<personalDetailsModel>(PersonalDetails);
            }

        }



        public BaseResponse updatePersonalDetails(personalDetailsModel personalDetailsModel)
        {
            try
            {
                PersonalDetails personalDetailsNew = _mapper.Map<PersonalDetails>(personalDetailsModel);
                PersonalDetails personalDetailsOld = _PracticomContext.PersonalDetails.Find(personalDetailsModel.patientId);

                personalDetailsOld.patientId = personalDetailsOld.patientId;
                personalDetailsOld.NumOfVaccinations = personalDetailsOld.NumOfVaccinations;
                personalDetailsOld.TzPerson = personalDetailsNew.TzPerson;
                personalDetailsOld.FirstName =personalDetailsNew.FirstName;
                personalDetailsOld.LastName = personalDetailsNew.LastName;
                personalDetailsOld.Phone = personalDetailsNew.Phone;
                personalDetailsOld.Street = personalDetailsNew.Street;
                personalDetailsOld.NumberHouse = personalDetailsNew.NumberHouse;
                personalDetailsOld.PositiveResult = personalDetailsNew.PositiveResult;
                personalDetailsOld.BirthDate = personalDetailsNew.BirthDate;
                personalDetailsOld.MobilePhone = personalDetailsNew.MobilePhone;
                personalDetailsOld.Recovery = personalDetailsNew.Recovery;
                personalDetailsOld.CityId = personalDetailsNew.CityId;
                
               // personalDetailsOld.ArrVaccinations = personalDetailsNew.ArrVaccinations;

                _PracticomContext.PersonalDetails.Update(personalDetailsOld);
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




















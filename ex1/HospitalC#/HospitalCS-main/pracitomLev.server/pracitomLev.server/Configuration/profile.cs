using AutoMapper;
using pracitomLev.API.DTO;
using practiomLev.DATA.Model;

//using practiomLev.Core.Model;
using practiomLev.Core.response;
using PractiomLev.Core.Model;

namespace pracitomLev.API.Configuration
{
    public class PractiomProfile : Profile
    {
        public PractiomProfile()
        {

            CreateMap<personalDetailsDTO, personalDetailsModel>().ReverseMap();
            CreateMap<PersonalDetails, personalDetailsModel>().ReverseMap();

            CreateMap<VaccinationsDTO, vaccinationsModel>().ReverseMap();
            CreateMap<Vaccinations, vaccinationsModel>().ReverseMap();

            CreateMap<ManufacturersDTO, manufacturersModel>().ReverseMap();
            CreateMap<Manufacturers, manufacturersModel>().ReverseMap();

            CreateMap<CityDTO, cityModel>().ReverseMap();
            CreateMap<City, cityModel>().ReverseMap();

        }
    }
}

using AutoMapper;
using parcitomLev.DAL;
using pracitomLev.service;
using PractiomLev.Core.Interface.DAL;
using PractiomLev.Core.Interface.Service;
using Serilog;

namespace pracitomLev.API.Configuration
{
    public static  class DiConfig
    {

        public static void ConfigurationService(this IServiceCollection services)
        {

            services.AddScoped<IPersonalDetailsService, PersonalDetailsService>();
            services.AddScoped<IPersonalDetailsRepository, PersonalDetailsRepository>();

            services.AddScoped<ICityService, CityService>();
            services.AddScoped<ICityRepository, CityRepository>();

            services.AddScoped<IManufacturersService, ManufacturersService>();
            services.AddScoped<IManufacturersRepository, ManufacturersRepository>();

            services.AddScoped<IVaccinationsService, VaccinationsService>();
            services.AddScoped<IVaccinationsRepository, VaccinationsRepository>();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new PractiomProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

          

        }
    }
}

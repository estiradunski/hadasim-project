using MathNet.Numerics.Interpolation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NPOI.SS.Formula.Functions;
using pracitomLev.API.Configuration;
using practiomLev.DATA;
using Serilog;
using Serilog.Events;
using Serilog.Formatting.Compact;
using System.Text;
using Log = Serilog.Log;

namespace pracitomLev.API
{
    public class Program
    {
        public static void Main(string[] args)
        {


            var builder = WebApplication.CreateBuilder(args);

          
            ConfigurationManager configuration = builder.Configuration;
            // Add services to the container.


            builder.Services.AddControllers();

            builder.Host.UseSerilog((hostingContext, loggerConfiguration) =>
            {
                loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration);
            });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            //swager match to jwt
            builder.Services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Description = "Bearer Authentication with JWT Token",
                    Type = SecuritySchemeType.Http
                });
                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                       {
                  {
                  new OpenApiSecurityScheme
               {


                       Reference = new OpenApiReference
                                 {
               Id = "Bearer",
                     Type = ReferenceType.SecurityScheme
              }
                               },
                           new List<string>()


}
});
            });


            builder.Services.ConfigurationService();

            builder.Services.AddDbContext<PracticomContext>(option =>
            {
                option.UseSqlServer(configuration.GetConnectionString("PracticomContextConnectionString"));
            }
       );
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
             .AddJwtBearer(options =>
              {
                  options.TokenValidationParameters = new TokenValidationParameters
                  {
                      ValidateIssuer = true,
                      ValidateAudience = true,
                      ValidateLifetime = true,
                      ValidateIssuerSigningKey = true,
                      ValidIssuer = builder.Configuration["JWT:Issuer"],
                      ValidAudience = builder.Configuration["JWT:Audience"],
                      IssuerSigningKey = new
                      SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
                  };
              });

            var app = builder.Build();

            app.UseSerilogRequestLogging();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));
            app.UseAuthentication();//אימות
            app.UseAuthorization();//מתן הרשאות

            app.MapControllers();

            //Cors - must be placed after UseRouting
            app.UseCors(builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });
            app.Run();
        }
    }
}
using Microsoft.AspNetCore.Diagnostics;
using Newtonsoft.Json;
using practiomLev.Core.response;
//using PractiomLev.Core.response;
using Serilog;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;

namespace pracitomLev.API.Configuration
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ErrorHandlingMiddleware> logger;
        private readonly IConfiguration _configuration;
        public ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger, IConfiguration configuration)
        {
            this.next = next;
            this.logger = logger;
            _configuration = configuration;
        }

        public async Task Invoke(HttpContext context /* other dependencies */)
        {

            try
            {
                string startTime = DateTime.Now.ToString("HH:mm:ss dd.MM.yyyy");
                logger.LogInformation("middleware logger startTime:" + startTime);
               

                       await next(context);
                string endTime = DateTime.Now.ToString("HH:mm:ss dd.MM.yyyy");
                logger.LogInformation("middleware logger endTime:" + endTime);

            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex,logger);
            }
        }
        private static Task HandleExceptionAsync(HttpContext context, Exception ex, ILogger<ErrorHandlingMiddleware> logger)
        {      
            var response = new BaseResponse() { Succeeded = false, ErrorMessage = ex.Message };
            var result = JsonConvert.SerializeObject(response);
            
            logger.LogError("error middleware");
            return context.Response.WriteAsync(result);
            
        }

    }
}


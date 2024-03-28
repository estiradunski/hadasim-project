using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practiomLev.Core.response
{
    public class BaseResponse
    {
        public bool Succeeded { get; set; }
        public string ErrorMessage { get; set; }

        public BaseResponse()
        {
            Succeeded = true;
        }
    

        public BaseResponse(string errorMessage)
        {
            Succeeded = false;
            ErrorMessage = errorMessage;
        }
    }
}

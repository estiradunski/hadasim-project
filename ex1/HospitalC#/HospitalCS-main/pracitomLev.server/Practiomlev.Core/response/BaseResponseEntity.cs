using PractiomLev.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practiomLev.Core.response
{
    public  class BaseResponseEntity<T>:BaseResponse
    {
        public T Entity { get; set; }

        public BaseResponseEntity() :base()
        {
           
        }
        public BaseResponseEntity(string errorMessage) :base(errorMessage)
        {
                
        }


    }
}

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
    public class ManufacturersRepository: IManufacturersRepository
    {
        readonly PracticomContext _PracticomContext;
        readonly IMapper _mapper;

        public ManufacturersRepository(PracticomContext practicomContext, IMapper mapper)
        {
            _PracticomContext = practicomContext;
            _mapper = mapper;
        }
        public manufacturersModel addManufacturer(manufacturersModel manufacturersModel)
        {
            try
            {
                Manufacturers manufacturers = _mapper.Map<Manufacturers>(manufacturersModel);
                _PracticomContext.Manufacturers.Add(manufacturers);
                _PracticomContext.SaveChanges();
                return _mapper.Map<manufacturersModel>(manufacturers);
            }
            catch
            {
                throw new Exception("faild to add Manufacturer");
            }
        }
        public BaseResponse DeleteManufacturers(int ManufacturersId)
        {
            try
            {
                if (_PracticomContext.Manufacturers.Any(c => c.ManufacturerId == ManufacturersId))
                {

                    Manufacturers Manufacturers = _PracticomContext.Manufacturers.First(c => c.ManufacturerId == ManufacturersId);

                    _PracticomContext.Manufacturers.Remove(Manufacturers);

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
        public List<manufacturersModel> getManufacturers()
        {

            List<Manufacturers> Manufacturers = new List<Manufacturers>();

            try
            {
                Manufacturers = _PracticomContext.Manufacturers.ToList();

                return _mapper.Map<List<manufacturersModel>>(Manufacturers); ;
            }
            catch (Exception ex)
            {
                Console.WriteLine("no exist Manufacturers" + ex);
                return _mapper.Map<List<manufacturersModel>>(Manufacturers);
            }
            
        }
        public BaseResponse updateManufacturers(manufacturersModel manufacturersModel)
        {
            try
            {
                Manufacturers manufacturersNew = _mapper.Map<Manufacturers>(manufacturersModel);
                Manufacturers manufacturersOld = _PracticomContext.Manufacturers.Find(manufacturersModel.ManufacturerId);

                manufacturersOld.ManufacturerId = manufacturersOld.ManufacturerId;
                manufacturersOld.FullName = manufacturersNew.FullName;
               

                _PracticomContext.Manufacturers.Update(manufacturersOld);
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

import axios from 'axios'
axios.defaults.baseURL="http://localhost:5144/"

export default {
    
    getmanufacture: async () => {
        try{
            const getRes= axios.get(`api/Manufacturers`)
            return getRes
        }
        catch(ex)
        {
          console.log(ex.messege);
        }
       },
       deletemanufacture: async (manufactureId)=> {
      try{
        const deleteRes= axios.delete(`api/Manufacturers/${manufactureId}`)
        return deleteRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    },

    addmanufacture: async (manufactureObject)=> {
      try{
        const addeRes= axios.post(`api/Manufacturers`,manufactureObject)
        return addeRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
  ,
  updatemanufacture: async (manufactureObject)=>{
      try{
        const updateRes= axios.put(`api/Manufacturers`,manufactureObject)
        return updateRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
}


import axios from 'axios'
axios.defaults.baseURL="http://localhost:5144/"

export default {
    
        getCity: async () => {
        try{
            const getRes= axios.get(`api/City`)
            return getRes
        }
        catch(ex)
        {
          console.log(ex.messege);
        }
       },
       getCityById: async (cityId) => {
        try{
            const getRes= axios.get(`api/City/${cityId}`)
            return getRes
        }
        catch(ex)
        {
          console.log(ex.messege);
        }
       },
       deleteCity: async (patientId)=> {
      try{
        const deleteRes= axios.delete(`api/City/${patientId}`)
        return deleteRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    },

    addCity: async (cityObject)=> {
      try{
        const addeRes= axios.post(`api/City`,cityObject)
        return addeRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
  ,
  updateCity: async (cityObject)=>{
      try{
        const updateRes= axios.put(`api/City`,cityObject)
        return updateRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
}


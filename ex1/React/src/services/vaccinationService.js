import axios from 'axios'
axios.defaults.baseURL="http://localhost:5144/"

export default {
    
    getCity: async (PatientId) => {
        try{
            const getRes= axios.get(`api/Vaccinations/${PatientId}`)
            return getRes
        }
        catch(ex)
        {
          console.log(ex.messege);
        }
       },
       deleteCity: async (IdPatient,dateTime)=> {
      try{
        const deleteRes= axios.delete(`api/Vaccinations/${IdPatient}/${dateTime}`)
        return deleteRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    },

    addCity: async (VaccinationsObject)=> {
      try{
        const addeRes= axios.post(`api/Vaccinations`,VaccinationsObject)
        return addeRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
  ,
  updateCity: async (VaccinationsObject)=>{
      try{
        const updateRes= axios.put(`api/Vaccinations`,VaccinationsObject)
        return updateRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
}


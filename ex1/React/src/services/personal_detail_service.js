import axios from 'axios'
axios.defaults.baseURL="http://localhost:5144/"

export default {
    getAllPersonal_details: async () => {
     try{
         const getRes= axios.get(`api/PersonalDetails`)
         return getRes
     }
     catch(ex)
     {
       console.log(ex.messege);
     }
    },
    getPersonal_details: async (patientId) => {
        try{
            const getRes= axios.get(`api/PersonalDetails/${patientId}`)
            return getRes
        }
        catch(ex)
        {
          console.log(ex.messege);
        }
       },
    deletePersonalDetails: async (patientId)=> {
      try{
        const deleteRes= axios.delete(`api/PersonalDetails/${patientId}`)
        return deleteRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    },

    addPersonalDetails: async (personDetailsObject)=> {
      try{
        const addeRes= axios.post(`api/PersonalDetails`,personDetailsObject)
        return addeRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
  ,
    putPersonalDetails: async (personalDetailsObject)=>{
      try{
        const updateRes= axios.put(`api/PersonalDetails`,personalDetailsObject)
        return updateRes
      }
      catch(ex)
      {
        console.log(ex.messege);
      }
    }
}


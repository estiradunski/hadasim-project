// import React, { useState, useEffect } from 'react';
// import { getAllCorona_detail } from '../services/corona_details_service';
// import { useLocation } from 'react-router';

// export default function Details() {
//   const [vaccine, setVaccine] = useState([]);
//   const { state } = useLocation();
//   const { user } = state;

//   async function fetchData() {
//     const coronaDetails = await getAllCorona_detail();
//     setVaccine(coronaDetails);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const vaccineById = vaccine.find((p) => p.id_link === user._id);

//   return (
//     <>
//       <div>{user.name}</div>
//       <div>{user.identity}</div>
//     </>
//   );
// }
import { getAllCorona_detail } from '../services/corona_details_service';
export async function getAllUnvaccinatedUsers() {
  const allUsers = await getAllCorona_detail();
  const unvaccinatedUsers = allUsers.reduce((count, user) => {
    if (!user.corona_vaccination_date || user.corona_vaccination_date.length === 0) {
      return count + 1;
    }
    return count;
  }, 0);
  return unvaccinatedUsers;
}

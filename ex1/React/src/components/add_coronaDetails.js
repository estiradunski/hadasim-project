// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
// import { useState, useEffect } from 'react';
// import { getAllPersonal_details } from '../services/personal_detail_service';
// import { getAllCorona_detail } from '../services/corona_details_service'
// import { Grid } from '@mui/material';

// const UserDetails = () => {
//   const [name, setName] = useState('');
//   const [id, setId] = useState('');
//   const [userDetails, setUserDetails] = useState({});
//   const [error, setError] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleIdChange = (event) => {
//     setId(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError('');

//     try {
//       const allPersonalDetails = await getAllPersonal_details();
//       const allCoronaDetails = await getAllCorona_detail();

//       const userDetails = allPersonalDetails.find(
//         (user) => user.name === name && user.identity === id
//       );

//       if (!userDetails) {
//         setError('User not found');
//         return;
//       }

//       const coronaDetails = allCoronaDetails.find(
//         (corona) => corona.id_link === userDetails._id
//       );

//       setUserDetails({ ...userDetails, ...coronaDetails });
//     } catch (error) {
//       console.error(error);
//       setError('An error occurred while fetching user details');
//     }
//   };

//   return (
//     <div>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
//           Log in
//         </Typography>
//       </Box>
//       <Container maxWidth="sm" sx={{ mt: 20 }}>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={6}>
//               <TextField
//                 label="Name"
//                 variant="outlined"
//                 value={name}
//                 onChange={handleNameChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="ID"
//                 variant="outlined"
//                 value={id}
//                 onChange={handleIdChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" fullWidth sx={{ height: '56px' }}>
//                 Login
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         {error && <p>{error}</p>}
//         {userDetails.name && (
//           <div>
//             <h2>User Details:</h2>
//             <p>Name: {userDetails.name}</p>
//             <p>ID: {userDetails.identity}</p>
//             <p>Date of Birth: {new Date(userDetails.date_of_birth).toLocaleDateString()}</p>
//             <p>Phone: {userDetails.phon}</p>
//             <p>Mobile Phone: {userDetails.mobile_phon}</p>
//             <p>Address: {`${userDetails.address.city}, ${userDetails.address.street} ${userDetails.address.num}`}</p>
//             {userDetails.corona_vaccination_date && (
//               <div>
//                 <h3>Corona Details:</h3>
//                 <p>Vaccine Manufacturer: {userDetails.vaccine_manufacturer}</p>
//                 <p>Vaccination Date: {userDetails.corona_vaccination_date.join(', ')}</p>
//                 <p>Date of Receiving Positive Result: {new Date(userDetails.date_receiving_positive_result).toLocaleDateString()}</p>
//                 <p>Date of Recovery from Disease: {new Date(userDetails.date_recovery_disease).toLocaleDateString()}</p>
//               </div>
//             )}
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default UserDetails;
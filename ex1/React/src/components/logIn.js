



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { getAllPersonal_details } from '../services/personal_detail_service';
import  serviecPersonalDetails from '../services/personal_detail_service'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import moment from 'moment'
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import PersonalDetails from './personal_details'
const theme = createTheme();

export default function LogIn() {
  
  const [username, setUsername] = useState('');
  
  const [administrator_password, setAdministrator_password] = useState('');
  const [alert, setAlert] = useState(null);
  const [all_client, setAll_client] = useState([]);
  const navigate = useNavigate()


  const [managerDetails, setManagerDetails] = useState('');
  const[open,setOpen]=useState(false);
  const [error, setError] = useState(false)
  const[personalDetailsObj,setpersonalDetailsObj]=useState('');
  const[identity,setIdentity]=useState('');

  const handleDetails = async () => {
    try {
  
        const response =  await serviecPersonalDetails.getPersonal_details(identity);
        console.log(response);
  
        if (response.data.entity.tzPerson!=null) {
         
          console.log("dfghj")
          console.log(identity+"ייעכעגח")
          navigate(`/personal_details/${identity}`);

        }
        else{
          <Alert severity="error">
    You do not have access permission.
  </Alert>;
        }
    } catch (error) {
        console.error('Error fetching manager details:', error);
    }
    
};
// const [identity, setIdentity] = useState('');

// const handleDetails = async () => {
//   debugger;
//     try {
//         const response = await serviecPersonalDetails.getPersonal_details(identity);
//         console.log(response);

//         if (response.data.entity.tzPerson != null) {
//             const newIdentity = response.data.entity.tzPerson;
//             setIdentity(newIdentity);
//             console.log("dfghj");
//             console.log(newIdentity + "ייעכעגח");
//             navigate('/personal_details');
//         } else {
//             alert("hffdhhghjk");
//         }
//     } catch (error) {
//         console.error('Error fetching manager details:', error);
//     }
// };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          {alert && <Stack sx={{ mt: 2 }}>{alert}</Stack>}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="identity"
              label="identity"
              type="identity"
              id="identity"
              autoComplete="current-identity"
              value={identity}
              onChange={(event) => setIdentity(event.target.value)}
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="administrator_password"
              label="administrator_password"
              type="password"
              id="administrator_password"
              autoComplete="current-administrator_password"
              value={administrator_password}
              onChange={(event) => setAdministrator_password(event.target.value)}
            /> */}
            <Button onClick={ handleDetails} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
              Log In
            </Button>
          </Box>
        </Box>
        <Box mt={8}></Box>
      </Container>
    </ThemeProvider>
    
            
    </> );
}

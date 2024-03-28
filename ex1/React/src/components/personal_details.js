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
import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';


const theme = createTheme();

export default function PersonalDetails() {
    // const location = useLocation();
    // const identity = location.state.identity;
    
  const { identity } = useParams();
  console.log(identity+"3");
    
  
  const [administrator_password, setAdministrator_password] = useState('');
  const [alert, setAlert] = useState(null);
  const [all_client, setAll_client] = useState([]);
  const navigate = useNavigate()


  const [managerDetails, setManagerDetails] = useState('');
  const [error, setError] = useState(false)
  const[personalDetailsObj,setpersonalDetailsObj]=useState({});

        
      
    useEffect(() => {
        function CaseHandlersShow() {
            serviecPersonalDetails.getPersonal_details(identity)
                .then((personalDetailsGetRes) => {
                    console.log(identity);
                    if (personalDetailsGetRes.data.succeeded === true) {
                        console.log("error:" + error);
                        setError(true);
                        debugger;
                        setpersonalDetailsObj(personalDetailsGetRes.data.entity);
                        console.log(personalDetailsObj);
                    }
                })
                .catch((error) => {
                    console.log("error: " + error);
                    setError(true);
                });
        }
        CaseHandlersShow();
        
    }, []);
    

  return (
    <>
    {error && <TableContainer component={Paper}>
        <br></br>
                <Table>
                    <TableHead>
                        <TableRow style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255, 1)', color: 'black' }}>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">Identity</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">First Name</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">Last Name</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">CityId</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">Street</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">NumberHouse</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">BirthDate</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">Phone</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">MobilePhone</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">PositiveResult</TableCell>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">Recovery</TableCell>
                            {/* <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">ArrVaccinations</TableCell> */}
                        </TableRow>
                    </TableHead>
                <TableBody>
                      <TableRow>
                                <TableCell align="center" >
                                    {personalDetailsObj.tzPerson}
                                </TableCell>
                                <TableCell align="center">
                                    {personalDetailsObj.firstName}
                                </TableCell>
                                <TableCell align="center">
                                    {personalDetailsObj.lastName}
                                </TableCell >
                                <TableCell align="center">
                                    {personalDetailsObj.cityId}
                                </TableCell>
                                <TableCell align="center">
                                    {personalDetailsObj.street}
                                </TableCell>
                                <TableCell align="center">
                                    {personalDetailsObj.numberHouse}
                                </TableCell>
                                <TableCell align="center">
                                {moment(personalDetailsObj.birthDate).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell align="center">
                                    {personalDetailsObj.phone}
                                </TableCell>
                                <TableCell align="center">
                                    {personalDetailsObj.mobilePhone}
                                </TableCell>
                                <TableCell align="center">
                                {moment(personalDetailsObj.positiveResult).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell align="center">
                                    {moment(personalDetailsObj.recovery).format('DD/MM/YYYY')}
                                </TableCell>
                                
                            </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>}
    </> );
}
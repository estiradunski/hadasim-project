import React, { useEffect, useState, useRef } from "react";
import serviecPersonalDetails from '../services/personal_detail_service';
import serviecManufacture from '../services/manufactureService';
import { Typography } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { TextField, Box, Fab, Button,  Snackbar } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fade from '@mui/material/Fade';
import cityService from "../services/cityService";
import manufactureService from "../services/manufactureService";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
export default function AddCaseHandlers(props) {
 
    const [dataCity, setDataCity] = React.useState([]);
    const [dataManufacture, setdataManufacture] = React.useState([]);

    const [error, setError] = useState(false)


    const identityRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const cityIdRef = useRef(null);
    const streetRef = useRef(null);
    const numberHouseRef = useRef(null);
    const birthDateRef = useRef(null);
    const phoneRef = useRef(null);
    const mobilePhoneRef = useRef(null);
    const managerRef = useRef(null);
    const positiveResultRef = useRef(null);
    const recoveryRef = useRef(null);
    const {setUpdateOrDeleteOrAdd}=props

    const style = {
        textAlign: 'right',
        width: '185px',
        marginBottom: '5px'
    }
    const heightInput = "1px"

    const [openUpdate, setOpenUpdate] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [showMess, setShowMess] = useState(false)

    const [ArrVaccinations, setArrVaccinations] = useState([{}])
    const [VaccinationsOne, setVaccinationsOne] = useState({Date:"",manufacture:""})
    const [VaccinationsTwo, setVaccinationsTwo] = useState({Date:"",manufacture:""})
    const [Vaccinationsthree, setVaccinationsthree] = useState({Date:"",manufacture:""})
    const [Vaccinationsfour, setVaccinationsfour] = useState({Date:"",manufacture:""})

    function closeUpdate() {
        console.log(openUpdate);
        setOpenUpdate(false)
    }
    const isDisabledFunc = (caseH) => {
        setShowFormUpdate(true);
        setIsDisabled(false);
        setOpenUpdate(true);
    };
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });

    const sendAdd = async () => {
        setOpenUpdate(false)
        setShowFormUpdate(false)
        setIsDisabled(true);
        console.log(VaccinationsOne);
        // setArrVaccinations([...Object.values(VaccinationsOne), ...Object.values(VaccinationsTwo),...Object.values(Vaccinationsthree), ...Object.values(Vaccinationsfour)])
        // const objPersonalDetails = {
        //   identity: identityRef.current.value,
        //   firstName: firstNameRef.current.value,
        //   lastName: lastNameRef.current.value,
        //   cityId:cityIdRef.current.value,
        //   street: streetRef.current.value,
        //   numberHouse: numberHouseRef.current.value,
        //   birthDate: birthDateRef.current.value,
        //   phone: phoneRef.current.value,
        //   mobilePhone: mobilePhoneRef.current.value,
        //   manager: managerRef.current.value,
        //   positiveResult: positiveResultRef.current.value,
        //   recovery: recoveryRef.current.value,

        //}
handleChange('ArrVaccinations',[ VaccinationsOne,VaccinationsTwo,Vaccinationsthree,Vaccinationsfour])
console.log('patient');
console.log(newPatient);
        const putCaseHandlerRes = await serviecPersonalDetails.addPersonalDetails(newPatient)
        setShowMess(true)
        setUpdateOrDeleteOrAdd(x => x + 1)
    };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await cityService.getCity();
            setDataCity([...response.data.entity]);
            // console.log(response.data.entity)
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [setDataCity]);

      console.log(dataManufacture,"dataManufacture");
      useEffect(() => {
          
        const fetchData = async () => {
           
          try {
            const response = await manufactureService.getmanufacture();
            setdataManufacture([...response.data.entity]);
            // console.log(response.data.entity)
            
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [setdataManufacture]);

      const [newPatient, setNewPatient] = useState({
        patientId: 0,
        FirstName: '',
        LastName: '',
        CityId: 0,
        Street: 0,
        NumberHouse: 0,
        BirthDate: '',
        Phone: 0,
        MobilePhone: 0,
        Manager: false,
        PositiveResult: '',
        Recovery: '',
        ArrVaccinations: [{}],
        NumOfVaccinations: 4,
    
      });
    
      function handleChange(field, value) {
        console.log(field, value);
        setNewPatient(prevState => ({
          ...prevState,
          [field]: value
        }))
        return true;
      };
      function handleVaccinationOne(field, value) {
        console.log(field, value);
        setVaccinationsOne(prevState => ({
          ...prevState,
          [field]: value
        }))
        return true;
      };
      function handleVaccinationTwo(field, value) {
        console.log(field, value);
        setVaccinationsTwo(prevState => ({
          ...prevState,
          [field]: value
        }))
        return true;
      };
      function handleVaccinationthree(field, value) {
        console.log(field, value);
        setVaccinationsthree(prevState => ({
          ...prevState,
          [field]: value
        }))
        return true;
      };
      function handleVaccinationfour(field, value) {
        console.log(field, value);
        setVaccinationsfour(prevState => ({
          ...prevState,
          [field]: value
        }))
        return true;
      };


    return (
        <>
            <div>
                <Button variant="outlined" onClick={() => isDisabledFunc()}>
                   הוסף חבר
                </Button>
                          </div>
            <Dialog open={openUpdate}>
                <button sx={{ width: '3px' }} onClick={closeUpdate} >x</button>
                <DialogTitle>חבר/ה חדש/ה</DialogTitle>
                <Box>
                <TextField
                        
                        value={newPatient.TzPerson}
                        onChange={(event) => handleChange('TzPerson',event.target.value)}
                        style={style}
                        label="TzPerson"
                        placeholder="TzPerson"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        
                        value={newPatient.FirstName}
                        onChange={(event) => handleChange('FirstName',event.target.value)}
                        style={style}
                        label="First Name"
                        placeholder="First Name"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <br /><br />
                    <TextField
                        
                        value={newPatient.LastName}
                        onChange={(event) => handleChange('LastName',event.target.value)}
                        style={style}
                        label="Last Name"
                        placeholder="Last Name"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        
                        value={newPatient.CityId}
                        onChange={(event) => handleChange('CityId',event.target.value)}
                        style={style}
                        label="CityId"
                        placeholder="CityId"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField><br /><br />
                    <TextField
                        
                        value={newPatient.Street}
                        onChange={(event) => handleChange('Street',event.target.value)}
                        style={style}
                        label="Street"
                        placeholder="Street"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        
                        value={newPatient.NumberHouse}
                        onChange={(event) => handleChange('NumberHouse',event.target.value)}
                        style={style}
                        label="NumberHouse"
                        placeholder="NumberHouse"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <br /><br />
                    <TextField
                        
                        value={newPatient.BirthDate}
                        onChange={(event) => handleChange('BirthDate',event.target.value)}
                        style={style}
                        label="BirthDate"
                        placeholder="BirthDate"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        
                        value={newPatient.Phone}
                        onChange={(event) => handleChange('Phone',event.target.value)}
                        style={style}
                        label="Phone"
                        placeholder="Phone"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        
                        value={newPatient.MobilePhone}
                        onChange={(event) => handleChange('MobilePhone',event.target.value)}
                        style={style}
                        label="MobilePhone"
                        placeholder="MobilePhone"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        
                        value={newPatient.Manager}
                        onChange={(event) => handleChange('Manager',event.target.value)}
                        style={style}
                        label="Manager"
                        placeholder="Manager"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        
                        value={newPatient.PositiveResultVal}
                        onChange={(event) => handleChange('PositiveResult',event.target.value)}
                        style={style}
                        label="PositiveResult"
                        placeholder="PositiveResult"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                       value={newPatient.Recovery}
                       onChange={(event) => handleChange('Recovery',event.target.value)}
                        style={style}
                        label="Recovery"
                        placeholder="Recovery"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <br /><br />
                    
              <div>      
            <Select
              value={VaccinationsOne.manufacture}
              onChange={(event)=>handleVaccinationOne('manufacture',event.target.value)}
              inputRef={recoveryRef}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Manufacture"
              style={style}
              placeholder="Manufacture"
              InputLabelProps={{
                  shrink: true,
              }}
              inputProps={{
                  style: { height: heightInput },
              }}>
            
              {dataManufacture.map((value, index) => (
                <MenuItem key={index} value={value.manufacturerId}> {value.fullName}</MenuItem>
              ))
              }
            </Select>
            <TextField
            value={VaccinationsOne.Date}
            onChange={(event) => handleVaccinationOne('Date',event.target.value)}
                        style={style}
                        label="VaccinationsOne"
                        placeholder="VaccinationsOne"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
           </TextField>
           </div> 

             <div>
            <Select
              value={VaccinationsTwo.manufacture}
              onChange={(event)=>handleVaccinationTwo('manufacture',event.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Manufacture"
              style={style}
              placeholder="Manufacture"
              InputLabelProps={{
                  shrink: true,
              }}
              inputProps={{
                  style: { height: heightInput },
              }}>
            
              {dataManufacture.map((value, index) => (
                <MenuItem key={index} value={value.manufacturerId}> {value.fullName}</MenuItem>
              ))
              }
            </Select>
            <TextField
            value={VaccinationsTwo.Date}
            onChange={(event) => handleVaccinationTwo('Date',event.target.value)}
                        style={style}
                        label="VaccinationsTwo"
                        placeholder="VaccinationsTwo"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
           </TextField>
           </div>     
           <div>
               <Select
              value={Vaccinationsthree.manufacture}
              onChange={(event)=>handleVaccinationthree('manufacture',event.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Manufacture"
              style={style}
              placeholder="Manufacture"
              InputLabelProps={{
                  shrink: true,
              }}
              inputProps={{
                  style: { height: heightInput },
              }}>
            
              {dataManufacture.map((value, index) => (
                <MenuItem key={index} value={value.manufacturerId}> {value.fullName}</MenuItem>
              ))
              }
            </Select>
            <TextField
            value={Vaccinationsthree.Date}
            onChange={(event) => handleVaccinationthree('Date',event.target.value)}
                        style={style}
                        label="Vaccinationsthree"
                        placeholder="Vaccinationsthree"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
           </TextField>
           </div>
           <div>
            <Select
               value={Vaccinationsfour.manufacture}
               onChange={(event)=>handleVaccinationfour('manufacture',event.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Manufacture"
              style={style}
              placeholder="Manufacture"
              InputLabelProps={{
                  shrink: true,
              }}
              inputProps={{
                  style: { height: heightInput },
              }}>
            
              {dataManufacture.map((value, index) => (
                <MenuItem key={index} value={value.manufacturerId}> {value.fullName}</MenuItem>
              ))
              }
            </Select>
            <TextField
            value={Vaccinationsfour.Date}
            onChange={(event) => handleVaccinationfour('Date',event.target.value)}
                        style={style}
                        label="Vaccinationsfour"
                        placeholder="Vaccinationsfour"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
           </TextField>
           </div>
           <FormControl fullWidth>
                    
          </FormControl>
                    <br /><br />
                    <Button variant="outlined" onClick={sendAdd}>
                        הוספה
                    </Button>
                </Box>
            </Dialog>
            <div>
                <Snackbar
                    open={showMess}
                    onClose={() => setShowMess(false)}
                    TransitionComponent={state.Transition}
                    message="הוסף בהצלחה"
                    // key={state.Transition.name}
                    autoHideDuration={1200}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

                />
            </div>
            <br></br>

        </>
    );
}

import React, { useEffect, useState, useRef } from "react";
// import putPersonalDetails from '../services/personal_detail_service';
// import deletePersonalDetails from '../services/personal_detail_service';
// import getAllPersonal_details from '../services/personal_detail_service';
import serviecPersonalDetails from '../services/personal_detail_service';
import serviceCity from '../services/cityService'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import { Typography } from '@mui/material'
import AddCaseHandlers from './add_PersonalDetails'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { TextField, Box, Fab, Button, Snackbar } from '@mui/material';
import Fade from '@material-ui/core/Fade';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import moment from 'moment'
import { useContext } from 'react';
import cityService from "../services/cityService";

export default function CaseHandlers() {

    const [caseHandlerIdDelete, setCaseHandlerIdDelete] = useState([]);
    const [error, setError] = useState(false)
    const [personalDetailsList, setpersonalDetailsList] = useState([]);

    
    const [identityVal, setIdentityVal] = useState('')
    const [firstNameVal, setFirstNameVal] = useState('')
    const [lastNameVal, setLastNameVal] = useState('')
    const [cityIdVal, setCityIdVal] = useState('')
    const [streetVal, setStreetVal] = useState('')
    const [numberHouseVal, setNumberHouseVal] = useState('')
    const [birthDateVal, setBirthDateVal] = useState('')
    const [phoneVal, setPhoneVal] = useState('')
    const [mobilePhoneVal, setMobilePhoneVal] = useState('')
    const [managerVal, setManagerVal] = useState('')
    const [positiveResultVal, setPositiveResultVal] = useState('')
    const [recoveryVal, setRecoveryVal] = useState('')
    
    const [updateOrDeleteOrAdd, setUpdateOrDeleteOrAdd] = useState(0)

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
    

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showMess, setShowMess] = useState(false)
    const [showMess2, setShowMess2] = useState(false)

    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });

    useEffect(() => {
        async function CaseHandlersShow() {
            try {
                const personalDetailsGetRes = await serviecPersonalDetails.getAllPersonal_details();
                if (personalDetailsGetRes.data.succeeded === true) {
                    console.log("error:" + error);
                    setError(true);
                    setpersonalDetailsList(personalDetailsGetRes.data.entity);
                }
            } catch (error) {
                console.log("error: " + error);
                setError(true);
            }
        }
        CaseHandlersShow();
    }, [updateOrDeleteOrAdd]);

    const [open3, setOpen3] = useState(false);

    const handleClickOpenDelete = (id) => {
        setOpen3(true);
        setCaseHandlerIdDelete(id);
    };

    const handleCloseDelete = () => {
        setOpen3(false);
    };

    const handleDelete = async () => {
      
      console.log(caseHandlerIdDelete);
      debugger;
        const res = await serviecPersonalDetails.deletePersonalDetails(caseHandlerIdDelete);
        console.log("הגעתי");
        setShowMess2(true);
        setUpdateOrDeleteOrAdd(x => x + 1);
        setOpen3(false);
    };
    const style = {
        textAlign: 'right',
        width: '185px',
        marginBottom: '5px'
    }
    const heightInput = "1px"
    const [caseHandlerId, setCaseHandlerId] = useState(0)

    const [openUpdate, setOpenUpdate] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const[cityList, setCityList]=useState([])
    const[cityId, setCityId]=useState("")

    const [newProduct, setNewProduct] = useState({
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
        setNewProduct(prevState => ({
          ...prevState,
          [field]: value
        }))
        return true;
      };

    function closeUpdate() {
        console.log(openUpdate);
        setOpenUpdate(false)
    }
    const isDisabledFunc = (caseH) => {
        setShowFormUpdate(true);
        setCaseHandlerId(caseH.caseHandlerId)
        setIsDisabled(false);
        setOpenUpdate(true)

        setIdentityVal(caseH.identity)
        setFirstNameVal(caseH.firstName)
        setLastNameVal(caseH.lastName)
        setCityIdVal(caseH.cityId)
        setStreetVal(caseH.street)
        setNumberHouseVal(caseH.numberHouse)
        setBirthDateVal(caseH.birthDate)
        setPhoneVal(caseH.phone)
        setMobilePhoneVal(caseH.mobilePhone)
        setManagerVal(caseH.manager)
        setPositiveResultVal(caseH.positiveResult)
        setRecoveryVal(caseH.recovery)

    };

    const sendUpdate = async () => {
        setOpenUpdate(false)
        setShowFormUpdate(false)
        setIsDisabled(true);
        const objPersonalDetails = {
          // patientId: patientId,
          identity: identityRef.current.value,
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          cityId:cityIdRef.current.value,
          street: streetRef.current.value,
          numberHouse: numberHouseRef.current.value,
          birthDate: birthDateRef.current.value,
          phone: phoneRef.current.value,
          mobilePhone: mobilePhoneRef.current.value,
          manager: managerRef.current.value,
          positiveResult: positiveResultRef.current.value,
          recovery: recoveryRef.current.value,

        }

        const putPersonalDetailsRes = await serviecPersonalDetails.putPersonalDetails(objPersonalDetails);
        setShowMess(true)
        setUpdateOrDeleteOrAdd(x => x + 1)

        
    }


    useEffect(()=>{
        async function getCityName(){
            try{
                 const res=await cityService.getCity();
                 console.log(res);
                if(res.data.succeeded===true)
                {
                    setError(false);
                    setCityList(res.data.entity);
                }
            }catch{
               setError(true);
            }
        }
        getCityName()
    },[])
    const getCityNameByCityId = (cityId) => {
        var res = cityList.find(x=>x.cityId == cityId);
        if(res!=null)
        {
            return res.cityName;
        }
        return "-";
    }
    
    const contctVaccinations = (vaccinations) =>
    {
        var res = ""
        vaccinations.map(x=>{
            res += x.dateOfVaccination + "   " 
            // + x.manufacturers.fullName + "   "
        })
        return res;
    }
    // const YourComponent = ({ error,  isLoggedIn }) => {
    return (
        <>
           <br></br>
            {error && <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255, 1)', color: 'black' }}>
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center"></TableCell>
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
                            <TableCell sx={{ border: "1px solid black", color: "#E9967A" }} align="center">ArrVaccinations</TableCell>
                        </TableRow>
                    </TableHead>
                    {personalDetailsList && <TableBody>
                        {personalDetailsList.map((caseH, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >  
                                <TableCell align="center">
                                    <Button sx={{ border: "1px solid" }} variant="outlined" onClick={() => handleClickOpenDelete(caseH.tzPerson)} >
                                        מחיקה
                                    </Button>
                                    <Button sx={{ border: "1px solid" }} variant="outlined" onClick={() => isDisabledFunc(caseH)}>
                                        עדכון
                                    </Button>
                                    
                                </TableCell>
                                 
                                <TableCell align="center" >
                                    {caseH.tzPerson}
                                </TableCell>
                                <TableCell align="center">
                                    {caseH.firstName}
                                </TableCell>
                                <TableCell align="center">
                                    {caseH.lastName}
                                </TableCell >
                                <TableCell align="center">
                               {getCityNameByCityId(caseH.cityId)}
                                </TableCell>
                                <TableCell align="center">
                                    {caseH.street}
                                </TableCell>
                                <TableCell align="center">
                                    {caseH.numberHouse}
                                </TableCell>
                                <TableCell align="center">
                                {moment(caseH.birthDate).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell align="center">
                                    {caseH.phone}
                                </TableCell>
                                <TableCell align="center">
                                    {caseH.mobilePhone}
                                </TableCell>
                                <TableCell align="center">
                                {moment(caseH.positiveResult).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell align="center">
                                    {moment(caseH.recovery).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell align="center">
                                    {contctVaccinations(caseH.arrVaccinations)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>}
                </Table>
            </TableContainer>}
            <Dialog open={openUpdate}>
                <button sx={{ width: '3px' }} onClick={closeUpdate} >x</button>
                <DialogTitle>מטופל/ת חדש/ה</DialogTitle>
                <Box>
                <TextField
                        inputRef={recoveryRef}
                        value={recoveryVal}
                        onChange={(event) => handleChange('patientId',event.target.value)}
                        style={style}
                        label="patientId"
                        placeholder="patientId"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        inputRef={identityRef}
                        value={identityVal}
                        onChange={(event) => handleChange('TzPerson',event.target.value)}
                        style={style}
                        label="Identity"
                        placeholder="Identity"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            style: { height: heightInput },
                        }}>
                    </TextField>
                    <TextField
                        inputRef={firstNameRef}
                        value={firstNameVal}
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
                        inputRef={lastNameRef}
                        value={lastNameVal}
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
                        inputRef={cityIdRef}
                        value={cityIdVal}
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
                        inputRef={streetRef}
                        value={streetVal}
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
                        inputRef={numberHouseRef}
                        value={numberHouseVal}
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
                        inputRef={birthDateRef}
                        value={birthDateVal}
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
                        inputRef={phoneRef}
                        value={phoneVal}
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
                        inputRef={mobilePhoneRef}
                        value={mobilePhoneVal}
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
                        inputRef={managerRef}
                        value={managerVal}
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
                        inputRef={positiveResultRef}
                        value={positiveResultVal}
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
                        inputRef={recoveryRef}
                        value={recoveryVal}
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
                    <Button variant="outlined" onClick={sendUpdate}>
                        שליחת העדכונים
                    </Button>
                </Box>
            </Dialog>
            <Snackbar
                open={showMess}
                onClose={() => setShowMess(false)}
                TransitionComponent={state.Transition}
                message="עודכן בהצלחה"
                // key={state.Transition.name}
                autoHideDuration={1200}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

            />
            <Snackbar
                open={showMess2}
                onClose={() => setShowMess2(false)}
                TransitionComponent={state.Transition}
                message="נמחק בהצלחה"
                // key={state.Transition.name}
                autoHideDuration={1200}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

            />

            <Dialog open={open3} onClose={handleCloseDelete}>
                <DialogContent>
                    <DialogContentText>
                        ?האם בטוח אתה רוצה למחוק
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete} color="primary">
                        ביטול
                    </Button>
                    <Button onClick={handleDelete} color="secondary">
                        אישור
                    </Button>
                </DialogActions>
            </Dialog>
            <br></br>
            <AddCaseHandlers setUpdateOrDeleteOrAdd={setUpdateOrDeleteOrAdd} />
        </>

    )
    // }
}


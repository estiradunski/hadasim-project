import { Routes, Route, Navigate } from 'react-router-dom'
import  UserDetails from "./logIn"
import All_clients from './all_clients'
import NavBar from './navBar'
import Corona_survey from './corona_survey'
import LogIn_manager from './logIn_manager'
import Home_page from './home_page'
import PersonalDetails from './personal_details'




// import LogIn from './personal_details'
// import Loginb from './add_coronaDetails'

export default function Router() {

    return <div>
        <NavBar />
        <Routes>
        <Route path="/personal_details/:identity" element={<PersonalDetails />} />

            <Route path='personal_details' element={<PersonalDetails />}></Route> 
            <Route path='home_page' element={<Home_page />}></Route>
            <Route path='logIn' element={< UserDetails />}></Route>
            <Route path='all_clients' element={<All_clients />}></Route>
            <Route path='corona_survey' element={<Corona_survey />}></Route>
            <Route path='logIn_manager' element={<LogIn_manager />}></Route>
            {/* <Route path='add_coronaDetails' element={<Loginb />}></Route> */}

            <Route path='/' element={<Navigate to='/Home_page' />}></Route>
        </Routes>
    </div>
}
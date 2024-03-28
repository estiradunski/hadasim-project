
import React from 'react';
import './App.css';
import MenuAppBar from './components/navBar'
import { BrowserRouter } from 'react-router-dom';
import LogIn from './components/logIn'
import Router from './components/router';
import Home_page from './components/home_page'
import LogIn_manager from './components/logIn_manager'
import ClientTable from './components/all_clients'
import UserDetails from './components/add_coronaDetails'
// import  SearchAppBar from './components/add_corona_details'
import CoronaSummary from './components/corona_survey'
import getAllUnvaccinatedUsers from './components/details'
function App() {
  return (
    <BrowserRouter>
    {/* <getAllUnvaccinatedUsers/> */}
      <Router />
      {/* <UserDetails/> */}
    </BrowserRouter>
  );
}

export default App;
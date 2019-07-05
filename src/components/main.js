import React from 'react';
import {Switch, Route} from 'react-router-dom'


import AppiontmentReport from './receptionest-dashbord/appiontmentReport'
import generalInfo from './doctor-dashboard/generalInfo'
import TestHistory from './doctor-dashboard/testHistory';
import MedicineHistory from './doctor-dashboard/medicineHistory';
import LandingPage from './landingPage';
import addReport from './doctor-dashboard/addReport';
import reportHistory from './doctor-dashboard/reportHistory';
import DoctorRegist from './forms/doctorRegist';
import addempolyee from './forms/addempolyee';
import addpatient from './forms/addpatient';
import managedoctors from './manageEmployee/managedoctors'
import managelabspialist from './manageEmployee/managelabspialist'
import managephamacest from './manageEmployee/managephamacest'
import managereceptionist from './manageEmployee/managereceptionist'
import managepatient from './manageEmployee/managepatient'

import CreateAppointment from './forms/createAppointment';
import CreateTest from './forms/createTest';

import generalInfodoctor from './generalInfo/generalInfodoctor'
import editInfodoctor from './generalInfo/editInfodoctor'
import generalInfousers from './generalInfo/generalInfousers'
import editInfouser from './generalInfo/editInfouser'
import historyuser from './generalInfo/historyuser'

 function Main() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
     <Route exact path='/appiontmentReport' component={AppiontmentReport}/>
     <Route exact path='/generalInfo' component={generalInfo}/>
     <Route exact path='/addReport' component={addReport}/>
     <Route exact path='/reportHistory' component={reportHistory}/>
     <Route exact path='/testHistory' component={TestHistory}/>
     <Route exact path='/medicineHistory' component={MedicineHistory}/> 
     <Route exact path='/createAppointment' component={CreateAppointment}/>
     <Route exact path='/doctorRegist' component={DoctorRegist}/>
     <Route exact path='/addempolyee' component={addempolyee}/>
     <Route exact path='/addpatient' component={addpatient}/>
     <Route exact path='/createTest' component={CreateTest}/> 


    <Route exact path='/managedoctors' component={managedoctors}/> 
    <Route exact path='/managelabspialist' component={managelabspialist}/> 
    <Route exact path='/managephamacest' component={managephamacest}/> 
    <Route exact path='/managereceptionist' component={managereceptionist}/> 
    <Route exact path='/managepatient' component={managepatient}/> 
    <Route exact path='/managedoctors/generalInfodoctor/:id' component={generalInfodoctor}/>
    <Route exact path='/managedoctors/generalInfodoctor/edit/:id' component={editInfodoctor}/>
    <Route exact path='/managelabspialist/generalInfousers/:id' component={generalInfousers}/>
    <Route exact path='/managephamacest/generalInfousers/:id' component={generalInfousers}/>
    <Route exact path='/managereceptionist/generalInfousers/:id' component={generalInfousers}/>
    <Route exact path='/managepatient/generalInfousers/:id' component={generalInfousers}/>
    <Route exact path='/managelabspialist/generalInfousers/edit/:id' component={editInfouser}/>
    <Route exact path='/managephamacest/generalInfousers/edit/:id' component={editInfouser}/>
    <Route exact path='/managereceptionist/generalInfousers/edit/:id' component={editInfouser}/>
    <Route exact path='/managepatient/generalInfousers/edit/:id' component={editInfouser}/>
    <Route exact path='/managepatient/generalInfousers/historyuser/:id' component={historyuser}/> 

    </Switch>
  )
}

   

export default Main;
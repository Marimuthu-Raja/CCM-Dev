import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Contractorlist from './components/Contractorlist'
import Addcontractor from './components/Addcontractor'
import UserProfile from './components/UserProfile'
const BaseRouter = () => (
    <>
    
    <Switch>
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/Contractor-list" component={Contractorlist}/>
      <Route exact path="/addcontractor" component={Addcontractor}/>
      </Switch>
      
    </>
  );
  
  export default BaseRouter;
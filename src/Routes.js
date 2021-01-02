import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'


const BaseRouter = () => (
    <>
    
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/dashboard" component={Dashboard} />
  
      </Switch>
      
    </>
  );
  
  export default BaseRouter;
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Contractorlist from './components/Contractorlist'
import Addcontractor from './components/Addcontractor'
import QuotationList from './components/QuotationList'

const BaseRouter = () => (
    <>
    
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/Contractor-list" component={Contractorlist}/>
      <Route exact path="/addcontractor" component={Addcontractor}/>
      <Route exact path="/quotation" component={QuotationList}/>

      </Switch>
      
    </>
  );
  
  export default BaseRouter;
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Contractorlist from './components/Contractorlist'
import Addcontractor from './components/Addcontractor'
import UserProfile from './components/UserProfile'
import Contractor from './components/Contractor'
import Client from './components/Client'
import Country from './components/Country'
import Login from './components/Login'
import Quotation from './components/Qoutation'
import ContractorInvoice from './components/ContractorInvoice'
import AddInvoice from './components/AddInvoice'
import User from './components/User'
import ClientList from './components/ClientList'
import AddClient from './components/AddClient'

import QuotationList from './components/QuotationList'

const BaseRouter = () => (
    <>
    
    <Switch>
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/Contractor-list" component={Contractorlist}/>
      <Route exact path="/addcontractor" component={Addcontractor}/>
      <Route exact path="/contractor" component={Contractor} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/country" component={Country} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/quotation" component={Quotation} />
      <Route exact path="/contractorinvoice" component={ContractorInvoice} />
      <Route exact path="/addinvoice" component={AddInvoice} />
      <Route exact path="/users" component={User} /> 
      <Route exact path="/clientlist" component={ClientList} />
      <Route exact path="/addclient" component={AddClient}/> 
      <Route exact path="/quotation" component={QuotationList}/>

      </Switch>
      
    </>
  );
  
  export default BaseRouter;
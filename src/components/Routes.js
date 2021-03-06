import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'

import Profile from './Profile'
import Dashboard from './administration/dashboard/main'

import Addcontractor from './administration/contractor/Addcontractor'
import AddUser from './administration/user/AddUser'
import AddClient from './administration/client/AddClient'
import Contractorlist from './administration/contractor/Contractorlist'
import UserList from './administration/user/UserList'
import ClientList from './administration/client/ClientList'
import AddInvoice from './administration/billing/AddInvoice'
import QuotationList from './administration/billing/QuotationList'

import Login from './auth/Login'
import Logout from './auth/Logout'
import AddCountry from './AddCountry'
import NavBar from './Navbar'

import LandingPage from './administration/landingPage/LandingPage'
import ForgotPassword from './auth/Forgotpassword'
import AddQuotation from './administration/billing/AddQuotation'

import AddInvClient from './administration/billing/AddInvoiceClient';
import AddInvContractor from './administration/billing/AddInvContractor';

//import Client from './components/Client'
//import Contractor from './components/Contractor'
// import Quotation from './components/Quotation'
// import ContractorInvoice from './components/ContractorInvoice'
// import BarChart from './components/BarChart'
// import Chart from './components/Chart'

export default function BaseRouter() {

  const isLogin = localStorage.getItem('isLogin')
  return(
    <>
    
    <Switch>  
    <Route exact path="/" component={Login} />
    <Route exact path="/logout" component={Logout} />

      <Route exact path="/profile">
        {isLogin?<><NavBar /> <Profile /></>:<Redirect to='/' />}
      </Route>

      <Route exact path="/country">
        {isLogin? <><NavBar /><AddCountry /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/dashboard">
        {isLogin? <><NavBar /><Dashboard /></>:<Redirect to='/' />}
      </Route>
      
      <Route exact path="/addinvoice">
        {isLogin?<><NavBar /> <AddInvoice /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addQuotation">
        {isLogin?<><NavBar /> <AddQuotation /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/cwr-summary">
        {isLogin?<><NavBar /> <QuotationList /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/UserProfile">
        {isLogin? <><NavBar /><AddUser /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/user-list">
        {isLogin?<><NavBar /> <UserList /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/Contractor-list">
        {isLogin?<><NavBar /> <Contractorlist /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addcontractor">
        {isLogin? <><NavBar /><Addcontractor /> </>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addclient">
        {isLogin? <><NavBar /><AddClient /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/client-list">
        {isLogin?<><NavBar /> <ClientList /></>:<Redirect to='/' />}
      </Route>
      
      <Route exact path="/forgot-password">
        {isLogin? <><NavBar /><ForgotPassword /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/list">
        {isLogin? <><NavBar /><LandingPage /></>:<Redirect to='/' />}
      </Route>


      <Route exact path="/addinvoice/client">
        {isLogin? <><NavBar /><AddInvClient /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addinvoice/contractor">
        {isLogin? <><NavBar /><AddInvContractor /></>:<Redirect to='/' />}
      </Route>


      {/* <Route exact path="/contractor">
        {isLogin? <><NavBar /><Contractor /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/client">
        {isLogin?<><NavBar /> <Client /></>:<Redirect to='/' />}
      </Route>
       <Route exact path="/addQuotation">
        {isLogin?<><NavBar /> <AddQuotation /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/contractorinvoice">
        {isLogin? <><NavBar /><ContractorInvoice /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/barchart">
        {isLogin? <><NavBar /><BarChart /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/chart">
        {isLogin? <><NavBar /><Chart /></>:<Redirect to='/' />}
      </Route> */}

      </Switch>
      
    </>
  )
}
  
import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Contractorlist from './components/Contractorlist'
import Addcontractor from './components/Addcontractor'
import UserProfile from './components/UserProfile'
import Contractor from './components/Contractor'
import Client from './components/Client'
import Country from './components/Country'
import Login from './components/Login'
import Quotation from './components/Quotation'
import ContractorInvoice from './components/ContractorInvoice'
import AddInvoice from './components/AddInvoice'
import User from './components/User'
import ClientList from './components/ClientList'
import AddClient from './components/AddClient'
import ForgotPassword from './components/Forgot Password/Forgotpassword'
import QuotationList from './components/QuotationList'
import BarChart from './components/BarChart'
import Chart from './components/Chart'
import NavBar from './components/Navbar'
import Logout from './components/auth/Logout'

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
      <Route exact path="/dashboard">
        {isLogin? <><NavBar /><Dashboard /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/Contractor-list">
        {isLogin?<><NavBar /> <Contractorlist /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addcontractor">
        {isLogin? <><NavBar /><Addcontractor /> </>:<Redirect to='/' />}
      </Route>
      <Route exact path="/contractor">
        {isLogin? <><NavBar /><Contractor /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/client">
        {isLogin?<><NavBar /> <Client /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/country">
        {isLogin? <><NavBar /><Country /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/quotation">
        {isLogin?<><NavBar /> <Quotation /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/contractorinvoice">
        {isLogin? <><NavBar /><ContractorInvoice /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addinvoice">
        {isLogin?<><NavBar /> <AddInvoice /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/user">
        {isLogin?<><NavBar /> <User /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/clientlist">
        {isLogin?<><NavBar /> <ClientList /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/addclient">
        {isLogin? <><NavBar /><AddClient /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/cwr-summary">
        {isLogin?<><NavBar /> <QuotationList /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/barchart">
        {isLogin? <><NavBar /><BarChart /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/chart">
        {isLogin? <><NavBar /><Chart /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/UserProfile">
        {isLogin? <><NavBar /><UserProfile /></>:<Redirect to='/' />}
      </Route>
      <Route exact path="/forgot-password">
        {isLogin? <><NavBar /><ForgotPassword /></>:<Redirect to='/' />}
      </Route>
      </Switch>
      
    </>
  )
}
  
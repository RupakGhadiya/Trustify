import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import { Route, Routes } from "react-router-dom"
import Home from './components/home/Home'
import Help from './components/help/Help'
import Contact from './components/contact/Contact'
import Notification from './components/notification/Notification'
import Setting from './components/setting/Setting'
import Signup from './components/signup/Signup'
import Qronly from './components/home/Qronly/Qronly'
import Errorpage from './components/error page/Errorpage'
import Verifypage from './components/Verifypage/Verifypage'

import Qrform from './components/home/Qronly/Qrform'
import About from './components/profile/About'
import Login from './components/login/Login'
import AboutTrustify from './components/aboutus/AboutTrustify'


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/abouttrustify' element={<AboutTrustify/>} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/qronly' element={<Qrform />} />
        <Route path='/verify' element={<Verifypage />} />
        {/* <Route> <Errorpage /> </Route> */}
      </Routes>
    </>
  )
}

export default App
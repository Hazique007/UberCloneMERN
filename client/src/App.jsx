import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/User/Auth/UserLogin'
import UserSignup from './pages/User/Auth/UserSignup'
import CaptainLogin from './pages/Captain/Auth/CaptainLogin'
import CaptainSIgnup from './pages/Captain/Auth/CaptainSIgnup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSIgnup />} />
        
        


        </Routes>




    </div>
  )
}

export default App
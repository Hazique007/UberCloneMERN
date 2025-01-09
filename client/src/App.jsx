import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import UserLogin from './pages/User/Auth/UserLogin'
import UserSignup from './pages/User/Auth/UserSignup'
import CaptainLogin from './pages/Captain/Auth/CaptainLogin'
import CaptainSIgnup from './pages/Captain/Auth/CaptainSIgnup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/userProtectWrapper'
import CaptainProtectWrapper from './pages/Captain/CaptainProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/Captain/CaptainHome'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSIgnup />} />
        <Route path="/home-captain" element={
          <CaptainProtectWrapper>
          <CaptainHome />
          </CaptainProtectWrapper>
          
          } />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }/>

        <Route path ='/user/logout' element={ <UserProtectWrapper>
          <UserLogout/>
        </UserProtectWrapper>} />
        
        


        </Routes>




    </div>
  )
}

export default App
import React, { useContext, useEffect,useState} from 'react'
import { UserDatacontext } from '../context/Usercontext'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
const userProtectWrapper = ({
    children
}) => {

   const token =  localStorage.getItem('token')
   const [isLoading,setIsLoading]=useState(true)
   const {user,setUser}=useContext(UserDatacontext)

    const navigate = useNavigate()
    console.log(token);
    
  useEffect(() => {
    if(!token){
        navigate('/login')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
        Authorization : `Bearer ${token}`
      }
    }).then(response=>{
      if(response.status===200){
      
        setUser(response.data.user)
        setIsLoading(false)
      }
    }).catch(err=>{
      console.log(err);
      localStorage.removeItem('token')
      navigate('/login')
    })
  }, [token])
  return (
    <>

    {children}
    
    </>
  )
}

export default userProtectWrapper
import React, { useContext, useEffect, useState} from 'react'
import { CaptainDatacontext } from '../../context/CaptainContext'
import {  useNavigate } from 'react-router-dom'


const CaptainProtectWrapper = ({
    children
}) => {

   const token =  localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain,setCaptain}=useContext(CaptainDatacontext)
    console.log(token);
    const [isLoading,setIsLoading]=useState(true)
    
  useEffect(() => {
    if(!token){
        navigate('/captain-login')
    }
  }, [token])

  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
    headers:{
      Authorization : `Bearer ${token}`
    }
  }).then(response=>{
    if(response.status===200){
      const data=response.data;
      setCaptain(response.data.captain)
      setIsLoading(false)
    }
  }).catch(err=>{
    console.log(err);
    localStorage.removeItem('token')
    navigate('/captain-login')
  })


  if(isLoading){
    return(
        <div className='items-center justify-center' >
        Loading.. 
        </div>
    )
      
    
  }
  return (
    <>

    {children}
    
    </>
  )
}

export default CaptainProtectWrapper
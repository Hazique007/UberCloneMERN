import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Links } from 'react-router-dom'
import { CaptainDatacontext } from '../../../context/CaptainContext'
import axios from 'axios'
const CaptainLogin = () => {
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const {captain,setCaptain }=React.useContext(CaptainDatacontext);
    
const navigate=useNavigate();
    const SubmitHandler=async(e)=>{
        e.preventDefault();
        const captain= {
            email:email,
            password
        }


        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain);
        if(response.status===200){
           const data= response.data;
              console.log(data);
              setCaptain(data.captain);
              localStorage.setItem('token',data.token);
              console.log("ready");
              
              navigate('/home-captain')
        }
        
        setEmail(''),
        setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
           <div>
           <img className='w-20 mb-3' src='https://pngimg.com/d/uber_PNG24.png'>
            </img>

            <form onSubmit={(e)=>{
                SubmitHandler(e)
            }}
            >
                <h3 className='text-base font-medium mb-2'>What's your email?</h3>

                <input required type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                    placeholder='email@example.com'
                    className='border bg-[#eeeeee] px-4 py-2 text-lg w-full mb-7 placeholder:text-base' />

                <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                <input required type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border bg-[#eeeeee] px-4 py-2 text-lg w-full mb-7 placeholder:text-base' />

                <button className='bg-black font-semibold text-white w-full py-3 rounded mb-3'>Login</button>

               


            </form>
            <p className='text-center pt-2'>Wanna join a Fleet? <Link to='/captain-signup' className='text-blue-600'> Register as Captain
                </Link></p> 
           </div>
           <div>
            <Link to ='/login' className='bg-[#3F704D] flex item-center justify-center text-white text-center w-full px-4 py-3 rounded border mt-5'>
                Sign in as User
            </Link>
           </div>

        </div>
  )
}

export default CaptainLogin
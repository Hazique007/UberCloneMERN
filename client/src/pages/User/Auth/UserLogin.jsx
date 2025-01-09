
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import {UserDatacontext} from '../../../context/Usercontext'

const UserLogin = () => {
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setuserData] = useState({})
     const navigate = useNavigate()

    const {user,setUser} =useContext(UserDatacontext)

    const SubmitHandler= async(e)=>{
        e.preventDefault();
        const userData={
            email:email,
            password:password
        }

        console.log(userData)

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)


        if(response.status === 200){
            
            console.log("Logged in")
            const data= response.data

          
            
           setUser(data.user)
           localStorage.setItem('token',data.token)
           toast.success("Logged in successfully") ;
           navigate('/home')
           
        }else{

            console.log("error")
        }

        
            
        
        
        
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
           <div>
           <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'>

            </img>
            <Toaster toastOptions={{ duration: 2000 }} />

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
            <p className='text-center pt-2'>New Here? <Link to='/signup' className='text-blue-600'> Create new account
                </Link></p> 
           </div>
           <div>
            <Link to ='/captain-login' className='bg-[#ffa61c] flex item-center justify-center text-white text-center w-full px-4 py-3 rounded border mt-5'>
                Sign in as Captain
            </Link>
           </div>

        </div>
    )
}

export default UserLogin
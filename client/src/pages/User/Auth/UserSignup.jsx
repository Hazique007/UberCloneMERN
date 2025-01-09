import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDatacontext} from '../../../context/Usercontext'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [userData, setuserData] = useState({})

    const navigate = useNavigate()

    const {user,setUser} =useContext(UserDatacontext)

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password,
           
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
        if(response.status === 201){
            console.log(
                "Signed Up Succesfully!"
            );
            
           const data= response.data
           setUser(data.user)
           localStorage.setItem('token',data.token)
           navigate('/home')

        }else{
            log(
                "error"
            )
        }



        // setEmail(''),
        //     setPassword('')
        // setfirstName('')
        // setlastName('')

    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'>
                </img>

                <form onSubmit={(e) => {
                    SubmitHandler(e)
                }}
                >
                    <h3 className='text-base font-medium mb-2'>What's your name?</h3>
                    <div className='flex gap-3 mb-5'>
                        <input required type="text"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}

                            placeholder='First name'
                            className='border bg-[#eeeeee] px-4 rounded
                          py-2 text-lg w-1/2  placeholder:text-sm' />

                        <input required type="text"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}

                            placeholder='Last name'
                            className='border bg-[#eeeeee] px-4 rounded
                     py-2 text-lg w-1/2   placeholder:text-sm' />
                    </div>

                    <h3 className='text-base font-medium mb-2'>What's your email?</h3>

                    <input required type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        placeholder='email@example.com'
                        className='border bg-[#eeeeee] rounded px-4 py-2 text-lg w-full mb-5 placeholder:text-sm' />

                    <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                    <input required type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                        className='border bg-[#eeeeee] rounded px-4 py-2 text-lg w-full mb-5 placeholder:text-sm' />

                    <button className='bg-black font-semibold text-white w-full py-3 rounded mb-3'>Register</button>




                </form>
                <p className='text-center pt-2'>Already have an account? <Link to='/login' className='text-blue-600'> Login here
                </Link></p>
            </div>
            <div>
                <p className='text-[7px] text-center'>
                    This site is protected by reCAPTCHA and the Google
                    Policy and Terms of Service apply.
                    Privacy
                </p>
            </div>

        </div>
    )
}

export default UserSignup
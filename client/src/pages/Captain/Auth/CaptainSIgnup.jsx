import React, { useContext, useState } from 'react'
import { Link, Links } from 'react-router-dom'
import { CaptainDatacontext } from '../../../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CaptainSIgnup = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
 const [vehicleColour, setVehicleColour] = useState('')
 const [vehiclePlate, setVehiclePlate] = useState('')
 const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const {captain,setCaptain }=React.useContext(CaptainDatacontext);

  const SubmitHandler = async(e) => {
    e.preventDefault();
   const captainData={
    email: email,
    password: password,
    fullName: {
      firstName: firstName,
      lastName: lastName
    },
    vehicle: {
      colour: vehicleColour,
      plate: vehiclePlate,
      capacity: vehicleCapacity,
      vehicleType: vehicleType
    }
   }

   const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData);
   if(response.status===201){
      console.log("Signed Up Succesfully!");
      const data=response.data;
      // console.log(data);
      setCaptain(data.captain)
      localStorage.setItem('token',data.token);
      navigate('/home-captain')
   }


    

    setEmail(''),
      setPassword('')
    setfirstName('')
    setlastName('')
    setVehicleColour('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')


  }
  return (
    <div className='p-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-2' src='https://pngimg.com/d/uber_PNG24.png'>
        </img>

        <form onSubmit={(e) => {
          SubmitHandler(e)
        }}
        >
          <h3 className='text-base font-medium mb-2'>What's your name?</h3>
          <div className='flex gap-3 mb-3'>
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

            <h3 className='text-base font-medium mb-2'>Vehicle Details</h3>

            <div className='flex gap-3 '>
            <input required type="text"
              value={vehicleColour}
              onChange={(e) => setVehicleColour(e.target.value)}
              placeholder='Vehicle Colour'
              className='border bg-[#eeeeee] rounded px-4 py-2 text-lg w-full mb-5 placeholder:text-sm' />

            <input required type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder='Vehicle Plate'
              className='border bg-[#eeeeee] rounded px-4 py-2 text-lg w-full mb-5 placeholder:text-sm' />

            </div>

            <div className='flex gap-3 '>
            <input required type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder='Vehicle Capacity'
              className='border bg-[#eeeeee] rounded px-4 py-2 text-lg w-full mb-5 placeholder:text-sm' />

            <select required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='border bg-[#eeeeee] rounded px-4 py-2 text-lg w-full mb-5 placeholder:text-sm'>
              <option className='text-xs' value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorbike">Motorbike</option>
            </select>

            </div>

           
          

          <button className='bg-black font-semibold text-white w-full py-3 rounded mb-3'>Register</button>




        </form>
        <p className='text-center pt-2'>Already have an account? <Link to='/captain-login' className='text-blue-600'> Login here
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

export default CaptainSIgnup
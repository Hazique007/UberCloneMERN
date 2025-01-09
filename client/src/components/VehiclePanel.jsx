import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5 
      onClick={()=>{
        props.setVehiclePanelOpen(false)
      }}
      className='p-3 text-center absolute w-[93%] top-0  '> <i  className=" text-2xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5 mt-5'>Choose Your Vehicle</h3>

        <div 
        onClick={()=>{
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
          <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"></img>
          <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h className="text-lg  font-semibold">Rs.193</h>
        </div>
        {/* <div 
         onClick={()=>{
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
          </div>
          <h className="text-lg font-semibold">Rs.112</h>
        </div> */}
        <div
         onClick={()=>{
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,auto rides</p>
          </div>
          <h className="text-lg font-semibold">Rs.118</h>
        </div>
        <div 
         onClick={()=>{
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>Moto<span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'>1 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,Motor ride</p>
          </div>
          <h className="text-lg font-semibold">Rs.65</h>
        </div>
    </div>
  )
}

export default VehiclePanel
import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setConfirmRidePanel(false)
                }}
                className='p-3 text-center absolute w-[93%] top-0  '> <i className=" text-2xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5 mt-5'>Confirm Your Ride</h3>
            <div className='flex justify-between gap-2 items-center flex-col'>
                <img className='h-24' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" /></div>
            <div className=' w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className=' text-lg ri-map-pin-user-fill'></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-small text-gray-600 -mt-1'>Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className=' text-lg ri-map-pin-2-fill'></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-small text-gray-600 -mt-1'>Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                    <i className=' text-lg ri-currency-line'></i>
                    <div>
                        <h3 className='text-lg font-medium'>Rs.193.20</h3>
                        <p className='text-small text-gray-600 -mt-1'>Cash Cash</p>
                    </div>
                </div>

            </div>
            <button onClick={()=>{
                props.setVehicleFound(true)
                

                props.setConfirmRidePanel(false)
            }}  className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    )
}

export default ConfirmRide
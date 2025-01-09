import React from 'react'

const WaitingForDriverComp = (props) => {
  return (
    <div >
    <h5
        onClick={() => {
           props.setWaitingForDriver(false)
        }}
        className='p-3 text-center absolute w-[93%] top-0   '> <i className=" text-2xl text-gray-400 ri-arrow-down-wide-line"></i></h5>

        <div className='flex items-center justify-between'> 
            <img className='h-20' src="https://file.aiquickdraw.com/imgcompressed/img/compressed_8819e1fc214a721e0572a519e221f395.webp" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Hazique</h2>
                <h4 className=' text-xl font-semibold -mt-1 -mb-1'>UP65 1004</h4>
                <p className='text-sm text-gray-600'>Toyota Supra</p>
            </div>
            
            
            </div>
   
    <div className='flex justify-between gap-2 items-center flex-col'>
       
    <div className=' w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2 '>
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
    </div>
</div>
  )
}

export default WaitingForDriverComp
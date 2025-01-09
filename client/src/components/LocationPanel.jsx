import React from 'react'

const LocationPanel = (props) => {
    

    const Locations =[
        "A-2,Pool House,Iqra Colony ,Aligarh",
        "A-1,Cool House,SyedColony ,Delhi",
        "C-4,Pool House,Iqra Colony ,Aligarh",
        "A-3,Pool House,Iqra Colony ,Noida",

    ]
    


  return (
    <div>
        {
            Locations.map(function(elem,idx){
                return  <div key={idx} onClick={()=>{
                    props.setVehiclePanelOpen(true)
                    props.setpanelOpen(false)
                }}className='flex gap-4 border-2 border-gray-100 active:border-black  rounded-xl p-2  items-center my-2 justify-start'>
                <h2 className='bg-[#eee] rounded-full flex items-center justify-center h-10 w-10'>
                    <i className='ri-map-pin-fill'></i>
                </h2>
                <h4 className='text-lg font-medium'>
                   {elem}
                </h4>
            </div>
            })
        }
        
       
      
        
    </div>
  )
}

export default LocationPanel
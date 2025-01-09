import React,{useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriverComp from '../components/WaitingForDriver';


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [desitnation, setdesitnation] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [VehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [WaitingForDriver, setWaitingForDriver] = useState(false)
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false)
  const [VehicleFound, setVehicleFound] = useState(false)
  const WaitingForDriverRef = useRef(null)
  const VehiclePanelRef = useRef(null)
  const VehicleFoundRef = useRef(null)
  const ConfirmRidePanelRef = useRef(null)
  const SubmitHandler =(e)=>{
    e.preventDefault()
    console.log('submitted')
  }
useGSAP(function(){
 if(panelOpen){
  gsap.to(panelRef.current,{
    height :'70%',
    padding:20
  })
  gsap.to(panelCloseRef.current,{
    opacity:1
  })
 }else{
  gsap.to(panelRef.current,{
    height:'0',
    padding:0
  })
  gsap.to(panelCloseRef.current,{
    opacity:0
  })
 }
},[panelOpen])


useGSAP(function(){
 if(VehiclePanelOpen){
  gsap.to(VehiclePanelRef.current,{
    transform:'translateY(0)'
  })
 }else{
  gsap.to(VehiclePanelRef.current,{
    transform:'translateY(100%)'
  })
 }

},[VehiclePanelOpen])

useGSAP(function(){
  if(ConfirmRidePanel){
   gsap.to(ConfirmRidePanelRef.current,{
     transform:'translateY(0)'
   })
  }else{
   gsap.to(ConfirmRidePanelRef.current,{
     transform:'translateY(100%)'
   })
  }
 
 },[ConfirmRidePanel])


 useGSAP(function(){
  if(VehicleFound){
   gsap.to(VehicleFoundRef.current,{
     transform:'translateY(0)'
   })
  }else{
   gsap.to(VehicleFoundRef.current,{
     transform:'translateY(100%)'
   })
  }
 
 },[VehicleFound])

 useGSAP(function(){
  if(WaitingForDriver){
   gsap.to(WaitingForDriverRef.current,{
     transform:'translateY(0)'
   })
  }else{
   gsap.to(WaitingForDriverRef.current,{
     transform:'translateY(100%)'
   })
  }
 
 },[WaitingForDriver])


  return (
    <div className='h-screen position-relative overflow-hidden'>
      <img className="w-24 absolute left-5 top-5" src="https://globaleducationcoalition.unesco.org/uploads/252_Uber_color_logo.png">
      </img>
      <div className='h-screen w-screen'>

        <img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif">
        </img>
      </div>
      <div className=' absolute  h-screen top-0 w-full justify-end flex flex-col'>
        <div className='h-[30%]  bg-white p-6 relative rounded-t-2xl'>
          <h5 ref={panelCloseRef} onClick= {()=>{
            setpanelOpen(false)
          }}className='absolute right-6 top-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find Your Trip</h4>
          <form  onSubmit={(e)=>{
            SubmitHandler(e)
          }}  >
            <div className="line absolute h-16 top-[45%] w-1 left-10 bg-gray-900 rounded-full"></div>

            <input 
            onClick={()=>{
              setpanelOpen(true)
            }
            }
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
            className="bg-[#eee] px-12 
             py-2 text-base rounded-lg w-full mt-5"
              type="text" placeholder="Enter your pickup location" />
            <input
             onClick={()=>{
              setpanelOpen(true)
            }
            }
            value={desitnation}
            onChange={(e)=>{
              setdesitnation(e.target.value)
            }}
            className="bg-[#eee]
             px-12 py-2 text-base
              rounded-lg w-full mt-3" type="text"
               placeholder="Enter your destination" />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
         <LocationPanel  setpanelOpen={setpanelOpen}  
         setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={VehiclePanelRef} className=' fixed z-10 w-full translate-y-full bg-white bottom-0 px-3 py-8 pt-12 rounded-t-xl'>
     
       <VehiclePanel  setConfirmRidePanel={setConfirmRidePanel}  setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div ref={ConfirmRidePanelRef} className=' fixed z-10 w-full translate-y-full bg-white bottom-0 px-3 py-6 pt-12 rounded-t-xl'>
     
       <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}  setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div  ref={VehicleFoundRef}className=' fixed z-10 w-full translate-y-full bg-white bottom-0 px-3 py-6 pt-12 rounded-t-xl'>
     
     <LookingForDriver setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
    </div>
     
    <div ref={WaitingForDriverRef} className=' fixed z-10 w-full   bg-white bottom-0   px-3 py-6 pt-12 rounded-t-xl'>
     
     <WaitingForDriverComp setWaitingForDriver={setWaitingForDriver} />
    </div>
    </div>
  )
}

export default Home
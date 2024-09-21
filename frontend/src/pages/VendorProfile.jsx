import React from 'react'
import { Vendor_Profile_Schema } from '@/utils/form-schema'
import { useSelector, useDispatch } from 'react-redux'
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import VendorProfileAction from '@/component/VendorProfileAction';

const VendorProfile = () => {
  const {isLoading, vendor_profile} = useSelector(state => state.vendorProfile)

  return (
  <>
  <div className="flex justify-between  mr-4 ml-auto mt-3">
    <div>  
    <h1 className="font-base text-xl font-bold text-gray-500 mr-auto ml-auto mt-5 mb-1">My Profile</h1>
    </div>
     
      <VendorProfileAction
        defaultValues={{
          vendor_name: vendor_profile.vendor_name,
          vendor_address: vendor_profile.vendor_address,
          vendor_contact_number: vendor_profile.vendor_contact_number,
          vendor_openining_hours: vendor_profile.vendor_openining_hours,
          vendor_description: vendor_profile.vendor_description,
        }}
        triggerText='Update Profile'
        triggerStyle='text-md text-gray-700 border-2 border-gray-500 py-1 px-8 hover:bg-slate-300 bg-slate-100 inline-flex items-center gap-2' 
      />
  </div>
  { isLoading ? (<div>loading...</div>): (<>
      <div className="flex items-center justify-center">
        <h1 className="font-base text-lg font-bold text-gray-500 mr-auto ml-auto mt-14 mb-5">{vendor_profile.vendor_name}</h1>
      </div>
      <section className='flex justify-between w-[90%] ml-auto mr-auto  px-10 gap-28 bg-slate-200 rounded-xl h-56'>
          
          <div className='w-1/2 mt-10'>
            <p className='text-lg font-base text-gray-600 w-[80%] h-20 overflow-hidden'>
              {vendor_profile.vendor_description}
            </p>

            <div className='flex gap-4 mt-11'>
              <span className='inline-flex items-center gap-2 text-xs text-gray-600'><AiOutlineClockCircle/> <p>Open: {vendor_profile.vendor_openining_hours}</p></span>
              <span className='inline-flex items-center gap-2 text-xs text-gray-600'><CiLocationOn/> <p>{vendor_profile.vendor_address}</p></span>
              <span className='inline-flex items-center gap-2 text-xs text-gray-600'><BsTelephone/> <p>{vendor_profile.vendor_contact_number}</p></span>
            </div>
          </div>
          <div className='w-1/2 mt-20'>
            <img src={vendor_profile?.vendor_logo?.startsWith('http') 
        ? vendor_profile.vendor_logo 
        : `http://localhost:8000${vendor_profile.vendor_logo}`  }  className='rounded-xl h-52 w-[70%] shadow-md'/>
          </div>
      </section> </>)
     } </>
  )
}

export default VendorProfile
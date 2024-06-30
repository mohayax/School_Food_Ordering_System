import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getVendorList } from '@/store/profiles/vendor-thunks'
import VendorHeader from '@/component/Vendor-Header'
import DashbordCard from '@/component/DashbordCard'

const VendorDashboard = () => {


    

  return (
    <>
    <div className='flex w-[90%] mr-auto ml-auto'>
      <div className='flex gap-8 mt-5'>
       

        <DashbordCard
          title="Pending Orders"
          data="10"
          color='yellow'
        />

        <DashbordCard
          title="Successfull Orders"
          data="10"
          color='green'
        />

        <DashbordCard
          title="Cancelled Orders"
          data="10"
          color='red'
        />

        <DashbordCard
          title="Earnings This Month"
          data="₦1,994,345"
          color='gray'
        />

      </div>


    </div>
    </>
  )
}

export default VendorDashboard
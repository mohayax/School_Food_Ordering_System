import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getVendorList } from '@/store/profiles/vendor-thunks'
import VendorHeader from '@/component/Vendor-Header'
import DashbordCard from '@/component/DashbordCard'
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement} from "chart.js"

ChartJS.register(Tooltip, Legend, ArcElement, Title)
import { pieData } from '@/utils/pie-data'

const VendorDashboard = () => {
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    // title: {
    //   display: true,
    //   position: "bottom",
    //   text: "This Week's Top Selling Category"
    // }
  }
}

    

  return (
    <>
    <div className='flex flex-col w-[90%] mr-auto ml-auto'>
      <div className='flex gap-8 mt-5 ml-auto mr-auto'>
       

        <DashbordCard
          title="Pending Orders"
          data="10"
          borderColor="blue"
        />

        <DashbordCard
          title="Successfull Orders"
          data="10"
          borderColor='gray'
        />

        <DashbordCard
          title="Cancelled Orders"
          data="10"
          borderColor='gray'
        />

        <DashbordCard
          title="Earnings This Month"
          data="₦1,994,345"
          borderColor='gray'
        />

      </div>

      <div className='ml-auto mr-auto mt-11'>
        <h1 className='font-base text-gray-700 font-semibold text-lg'>This Week's Top Selling Category</h1>
        <Pie options={options} data={pieData} className='w-80'/>
      </div>

    </div>
    </>
  )
}

export default VendorDashboard
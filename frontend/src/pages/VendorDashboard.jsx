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

        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-yellow-400'>
                    <h2 className='text-sm font-base font-semibold text-gray-700'>Pending Orders</h2>
                    <p className='text-sm font-base font-semibold text-gray-600'>10</p>
        </div>


        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-green-400'>
            <h2 className='text-sm font-base font-semibold text-gray-700'>Successfull Orders</h2>
            <p className='text-sm font-base font-semibold text-gray-600'>12</p>
        </div>

        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-red-400'>
            <h2 className='text-sm font-base font-semibold text-gray-700'>Cancelled Orders</h2>
            <p className='text-sm font-base font-semibold text-gray-600'>20</p>
        </div>

        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-gray-400'>
            <h2 className='text-sm font-base font-semibold text-gray-700'>Earnings This Month</h2>
            <p className='text-sm font-base font-semibold text-gray-600'>₦1,994,345</p>
        </div>
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
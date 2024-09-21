import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getVendorProfile } from '@/store/profiles/vendor-thunks'
import { get_vendor_orders } from '@/store/order/order-thunks'
import { getVendorItems } from '@/store/menu-items/menuItems-thunks'
import VendorHeader from '@/component/Vendor-Header'
import DashbordCard from '@/component/DashbordCard'
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement} from "chart.js"
import { filterOrdersByWeek, calculateMonthlyEarnings } from '@/utils/date-handler'



ChartJS.register(Tooltip, Legend, ArcElement, Title)
// import { pieData } from '@/utils/pie-data'

const VendorDashboard = () => {
  const {isLoading, vendor_orders} = useSelector(state => state.vendor_order)
  const dispatch = useDispatch()
  
  const ordersThisWeek = filterOrdersByWeek(vendor_orders);
  const pending_orders = ordersThisWeek.filter(order => order.order_status === "Pending").length;
  const completed_orders = ordersThisWeek.filter(order => order.order_status === "Completed").length;
  const cancelled_orders = ordersThisWeek.filter(order => order.order_status === "Cancelled").length;
  const monthlyEarnings = calculateMonthlyEarnings(vendor_orders);
  const food = ordersThisWeek.filter(order => order.order_status === "Completed").reduce((total, order) => {
    return total + order.order_items.filter(item => item.item_category === "Food").length;
  }, 0); 
  const drinks = ordersThisWeek.filter(order => order.order_status === "Completed").reduce((total, order) => {
    return total + order.order_items.filter(item => item.item_category === "Drinks").length;
  }, 0); 
  const snacks = ordersThisWeek.filter(order => order.order_status === "Completed").reduce((total, order) => {
    return total + order.order_items.filter(item => item.item_category === "Snacks").length;
  }, 0); 
  
  console.log(food, drinks, snacks)
  
  
  const pieData = {

    labels: ["Food", "Drinks", "Snacks"],
    datasets: [
        {
            label: "This Week's Top Selling Category",
            data: [food, drinks, snacks],
            backgroundColor: ["green", "orange", "blue"],
            width: "300px"
        }
    ],
    hoverOffset: 4

}
  
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

   useEffect(()=>{
    dispatch(get_vendor_orders())
    dispatch(getVendorProfile())
    dispatch(getVendorItems())
   },[]) 

  return (
    <>
    <div className='flex flex-col w-[90%] mr-auto ml-auto'>
      <div className='flex gap-8 mt-5 ml-auto mr-auto'>

        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-yellow-400'>
                    <h2 className='text-sm font-base font-semibold text-gray-700'>Pending Orders</h2>
                    <p className='text-sm font-base font-semibold text-gray-600'>{pending_orders}</p>
        </div>


        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-green-400'>
            <h2 className='text-sm font-base font-semibold text-gray-700'>Successfull Orders</h2>
            <p className='text-sm font-base font-semibold text-gray-600'>{completed_orders}</p>
        </div>

        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-red-400'>
            <h2 className='text-sm font-base font-semibold text-gray-700'>Cancelled Orders</h2>
            <p className='text-sm font-base font-semibold text-gray-600'>{cancelled_orders}</p>
        </div>

        <div className='flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-gray-400'>
            <h2 className='text-sm font-base font-semibold text-gray-700'>Earnings This Month</h2>
            <p className='text-sm font-base font-semibold text-gray-600'>₦{monthlyEarnings}</p>
        </div>
      </div>

      <div className='ml-auto mr-auto mt-8'>
        <h1 className='font-base text-gray-700 font-semibold text-lg'>This Week's Top Selling Category</h1>
        <Pie options={options} data={pieData} className='w-[30vw]'/>
      </div>

    </div>
    </>
  )
}

export default VendorDashboard
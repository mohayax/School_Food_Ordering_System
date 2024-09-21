import React, { useEffect } from 'react'
import displayImg from '../assets/displayImg.jpg'
import { get_customer_orders } from '@/store/order/order-thunks'
import { useDispatch, useSelector } from 'react-redux'

const OrderHistory = () => {
  const {isLoading, user_orders} = useSelector(state => state.customer_order)
  


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_customer_orders())
  },[])
  return (
    <>
      <div className="flex w-[95%] mr-auto ml-auto">
        <h1 className="font-base text-md font-bold text-gray-500  mt-7">My Orders</h1>
      </div>
      {isLoading ? (
  <div><p>Loading...</p></div>
) : user_orders.length === 0 ? (
  <div><p>No Items...</p></div>
) : (
  user_orders.map((order) =>
    order.order_items.map((item) => {
      const orderDate = new Date(order.order_date).toISOString().split('T')[0]; // Extracts the date part

      return (
        <div key={item.id} className='flex flex-col w-[95%] mr-auto ml-auto mt-5 gap-6'>
          <div className={`flex gap-20 bg-slate-100 p-4 h-36 w-full border-l-[4px] ${order.order_status === "Pending"? 'border-yellow-400': order.order_status === "Cancelled"? 'border-yellow-600': 'border-green-600' }`}>
            <div className='flex gap-4 bg-white w-[50%] h-[90%] rounded-lg p-4 shadow-lg'>
              <img src={`http://localhost:8000${item.item_photo}`} alt="" className='h-full w-[40%] rounded-lg'/>
              <div className='flex flex-col'>
                <p className='text-lg text-gray-500 font-base font-semibold'>{item.item_name}</p>
                <p className='text-xs text-gray-500 font-base'>Item Price: {item.item_price}</p>
                <p className='text-xs text-gray-500 font-base'>Order date: {orderDate}</p>
                <p className='text-xs text-gray-500 font-base'>Status: {order.order_status}</p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <button className='py-2 px-10 border-2 border-gray-500 hover:bg-gray-200 font-base text-md text-gray-700'>Re-Order</button>
            </div>
          </div> 
        </div>
      );
    })
  )
)}


    </>
  )
}

export default OrderHistory
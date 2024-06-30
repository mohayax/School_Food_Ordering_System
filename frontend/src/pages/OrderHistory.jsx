import React from 'react'
import displayImg from '../assets/displayImg.jpg'

const OrderHistory = () => {
  return (
    <>
      <div className="flex w-[95%] mr-auto ml-auto">
        <h1 className="font-base text-md font-bold text-gray-500  mt-7">My Orders</h1>
      </div>

      <div className='flex flex-col w-[95%] mr-auto ml-auto mt-5 gap-6'>
        <div className='flex gap-20 bg-slate-100 p-4 h-36 w-full border-l-[4px] border-green-600'>
          <div className='flex  gap-4 bg-white w-[50%] h-[90%] rounded-lg p-4 shadow-lg'>
            <img src={displayImg} alt="" srcset=""  className='h-full w-[40%] rounded-lg'/>
            <div className='flex flex-col'>
              <p className='text-lg text-gray-500 font-base font-semibold'>Item name</p>
              <p className='text-xs text-gray-500 font-base'>Order date: 20-10-2024</p>
              <p className='text-xs text-gray-500 font-base'>Status: Sucessfull</p>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <button className='py-2 px-10 border-2 border-gray-500  hover:bg-gray-200 font-base text-md text-gray-700'>Re-Order</button>
          </div>
        </div>

        

        

        
      </div>
    </>
  )
}

export default OrderHistory
import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import logo from '../assets/bu-lg.png'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='w-[100%] bg-slate-100 shadow-md h-20 fixed'>
    <div className='flex justify-between items-center w-[95%] mr-auto ml-auto py-2'>
        <div className='flex justify-between items-center  gap-4'>
          <div className="rounded-full h-16 border-2 border-gray-400">
            <img src={logo} className="h-full rounded-full"/>
          </div>
          <p className='text-xl text-gray-700 font-base font-semibold'>Customer View</p>
        </div>

        <div className='flex justify-between items-center  gap-auto w-60'>
          <div className='border-2 border-gray-400 rounded-lg w-auto px-4 py-1'>
            <h1 className='text-lg text-gray-700 font-base font-semibold'>Hello, Aviator</h1>
          </div>
           
          {/* <div className='flex flex-row items-center justify-center w-38 px-2'>
            <div className='border-l-2 border-t-2 border-b-2 rounded-lg border-gray-400 w-[90%] rounded-r-none'>
              <input type="text" placeholder='search' className='outline-0 w-[100%] rounded-lg rounded-r-none pl-2' />
            </div>
              <div className='border-2  rounded-lg border-gray-400 w-[10%] rounded-l-none bg-white h-7 pt-1  border-l-0'>
                <FaSearch
                className='text-md text-gray-400 hover:cursor-pointer'
                onClick={() => console.log("cli")}
                />
              </div>
             
          </div> */}

          <div className='relative'>
            <FaShoppingCart 
              className='text-2xl text-gray-500 hover:cursor-pointer'
              onClick={() => navigate('/customer-view/cart')}
            />
            <div className='text-primary absolute bottom-5 rounded-full bg-white text-md -right-3 px-1  h-6 items-center content-center'>10</div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Header
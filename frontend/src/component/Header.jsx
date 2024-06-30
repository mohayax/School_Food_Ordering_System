import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import logo from '../assets/bu-lg.png'
import { Link, useNavigate } from 'react-router-dom'
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
          <Link to='/customer-view' className='text-xl text-gray-700 font-base font-semibold'>Customer View</Link>
        </div>

        <div className='flex justify-between items-center  gap-auto w-60'>
          <div className='border-2 border-gray-400  w-auto px-4 py-1'>
            <h1 className='text-lg text-gray-700 font-base font-semibold'>Hello, Aviator</h1>
          </div>
        
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
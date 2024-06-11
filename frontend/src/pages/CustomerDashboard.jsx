import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCustomerProfile } from '@/store/profiles/customer-thunks'
import { useEffect, useState } from 'react'
import { getVendorList } from '@/store/profiles/vendor-thunks'
import { get_user_cart } from '@/store/cart/cart-thunks'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/bu-lg.png'
import { FaShoppingCart } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"

const CustomerDashboard = () => {
  // const {customer} = useSelector(state => state.customerProfile)
  // const {vendors} = useSelector(state => state.vendorList)
  // const {isLoading, user_cart} = useSelector(state => state.cart)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   dispatch(getCustomerProfile())
  //   dispatch(getVendorList())
  //   dispatch(get_user_cart())
  // }, [])

  // console.log("user cart from page", user_cart)

  // const viewVendor = (id) =>{
  //   navigate(`vendor/${id}`)
  // }
  return (
    <div>

      <div className='w-[100%] bg-slate-100 shadow-md h-20'>
        <div className='flex justify-between items-center w-[90%] mr-auto ml-auto py-2'>
            <div className='flex justify-between items-center  gap-4'>
              <div className="rounded-full h-16 border-2 border-gray-400">
                <img src={logo} className="h-full rounded-full"/>
              </div>
              <p> welcome + name </p>
            </div>

            <div className='flex justify-between items-center  gap-5'>

            <div className='flex flex-row items-center justify-center w-38 px-2'>
                <div className='border-l-2 border-t-2 border-b-2 rounded-lg border-gray-400 w-[90%] rounded-r-none'>
                <input type="text" placeholder='search' className='outline-0 w-[100%] rounded-lg rounded-r-none pl-2' />
                </div>
                <div className='border-2  rounded-lg border-gray-400 w-[10%] rounded-l-none bg-white h-7 pt-1  border-l-0'>
                  <FaSearch
                  className='text-md text-gray-400 hover:cursor-pointer'
                  onClick={() => console.log("cli")}
                  />
                </div>
                
              </div>

              <div className='relative'>
              <FaShoppingCart 
                className='text-4xl text-primary hover:cursor-pointer'
              />
              <div className='text-primary absolute bottom-6 rounded-full bg-white text-md -right-3 px-1  h-6 items-center content-center'>10</div>
              </div>
            </div>
        </div>
      </div>

      {/* <div>
        <h1>Hi, {customer.first_name}</h1>
        <h1>{customer.last_name}</h1>
      </div>

      <div>
        {isLoading? <h1>cart...</h1>:
        <Link to='/customer-view/cart'>
        <h1>Cart--{user_cart.total_items}</h1>
        </Link>
        }
      </div>
    
        {vendors !== null? vendors.map((vendor) => (
            <div key={vendor.id}>
            <p>{vendor.id}</p>
            <h1>11{vendor.vendor_name}</h1>
            <p>{vendor.vendor_description}</p>
            <button onClick={() => viewVendor(vendor.id)}>view vendor</button>
            </div>
        )): <div>loding items</div>} */}

    </div>
  )
}

export default CustomerDashboard
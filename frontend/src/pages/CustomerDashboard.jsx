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
import Header from '@/component/Header'
import displayImg from '../assets/displayImg.jpg'
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

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



  const foodVendors = [
    {
        id: 1,
        name: "Gourmet Tacos",
        photo: displayImg,
        address: "Opposite block C, Baze University",
        open: "9:00am - 7:00pm",
        contact:  "123-456-7890",
    },
    {
        id: 2,
        name: "Pasta Paradise",
        photo: displayImg,
        address: "Opposite block C, Baze University",
        open: "9:00am - 7:00pm",
        contact:  "123-456-7890",
    },
    {
        id: 3,
        name: "Burger Haven",
        photo: displayImg,
        address: "Opposite block C, Baze University",
        open: "9:00am - 7:00pm",
        contact:  "123-456-7890", 
    },
   
    {
        id: 4,
        name: "Vegan Delights",
        photo: displayImg,
        address: "Opposite block C, Baze University",
        open: "9:00am - 7:00pm",
        contact:  "123-456-7890",
    },
    {
        id: 5,
        name: "BBQ Pitstop",
        photo: displayImg,
        address: "Opposite block C, Baze University",
        open: "9:00am - 7:00pm",
        contact:  "123-456-7890",
    },
    {
        id: 6,
        name: "Mediterranean Bites",
        photo: displayImg,
        address: "Opposite block C, Baze University",
        open: "9:00am - 7:00pm",
        contact:  "123-456-7890",
    },
    
];

console.log(foodVendors);

  return (
    <div className='pt-5 over-flow-y-scroll'>
      <div className="flex items-center justify-center">
        <h1 className="font-base text-md font-bold text-gray-500 mr-auto ml-auto">Available Vendors</h1>
      </div>

      <div className="flex flex-col gap-7 p-4 items-center justify-center w-[90%] mr-auto ml-auto">
        {foodVendors.map((vendor, index) => (
          <div key={index} className='flex gap-3  w-[100%] border-2 border-gray-400 rounded-lg hover:shadow-lg hover:animate-out'>
            <div className='w-[30%]'>
              <img src={vendor.photo} alt="" srcset="" className='h-[100%] w-50 rounded-l-lg rounded-r-none'  />
            </div>
            <div className='p-4 w-[70%] flex flex-col gap-2'>
              <h1 className='text-xl font-semibold font-base text-gray-700'>{vendor.name}</h1>
              <p className='inline-flex items-center gap-2 text-gray-600 text-sm'><span><CiLocationOn/></span>{vendor.address}</p>
              <p className='inline-flex items-center gap-2 text-gray-600 text-sm'><span><BsTelephone/></span>{vendor.contact}</p>
              
              <div className='flex justify-between'>
                <p className='inline-flex items-center gap-2 text-gray-600 text-sm'><span><AiOutlineClockCircle/></span>Open: {vendor.open}</p>
                <Link to={`vendor/${vendor.id}`} className='font-base text-gray-700 text-sm border-2 border-gray-400 inline-flex items-center gap-2 hover:bg-gray-300 
                   px-4 py-1'>View Vendor  </Link>
              </div>
            </div>
            
          </div>
        ) )}
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
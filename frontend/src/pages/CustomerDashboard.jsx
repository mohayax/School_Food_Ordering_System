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
    <div className='pt-5 over-flow-y-scroll'>

    <h1>Heelllloooooo</h1>

      
    
      
      
      
      
      
      
      
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
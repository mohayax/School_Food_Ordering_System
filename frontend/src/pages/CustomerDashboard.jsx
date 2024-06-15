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



  const foodVendors = [
    {
        name: "Gourmet Tacos",
        cuisine: "Mexican",
        description: "Authentic Mexican tacos made with fresh ingredients and bold flavors.",
        contact: {
            phone: "123-456-7890",
            email: "contact@gourmettacos.com",
            link: "https://www.gourmettacos.com"
        }
    },
    {
        name: "Pasta Paradise",
        cuisine: "Italian",
        description: "Delicious pasta dishes inspired by traditional Italian recipes.",
        contact: {
            phone: "234-567-8901",
            email: "info@pastaparadise.com",
            link: "https://www.pastaparadise.com"
        }
    },
    {
        name: "Burger Haven",
        cuisine: "American",
        description: "Juicy burgers made with premium beef and a variety of toppings.",
        contact: {
            phone: "345-678-9012",
            email: "support@burgerhaven.com",
            link: "https://www.burgerhaven.com"
        }
    },
    {
        name: "Sushi World",
        cuisine: "Japanese",
        description: "Fresh sushi and sashimi prepared by experienced chefs.",
        contact: {
            phone: "456-789-0123",
            email: "hello@sushiworld.com",
            link: "https://www.sushiworld.com"
        }
    },
    {
        name: "Curry Express",
        cuisine: "Indian",
        description: "Spicy and flavorful Indian curries served with rice and naan.",
        contact: {
            phone: "567-890-1234",
            email: "order@curryexpress.com",
            link: "https://www.curryexpress.com"
        }
    },
    {
        name: "Vegan Delights",
        cuisine: "Vegan",
        description: "Plant-based meals that are both healthy and delicious.",
        contact: {
            phone: "678-901-2345",
            email: "contact@vegandelights.com",
            link: "https://www.vegandelights.com"
        }
    },
    {
        name: "BBQ Pitstop",
        cuisine: "Barbecue",
        description: "Smoked meats and classic BBQ sides cooked to perfection.",
        contact: {
            phone: "789-012-3456",
            email: "info@bbqpitstop.com",
            link: "https://www.bbqpitstop.com"
        }
    },
    {
        name: "Mediterranean Bites",
        cuisine: "Mediterranean",
        description: "A variety of Mediterranean dishes including falafel, hummus, and more.",
        contact: {
            phone: "890-123-4567",
            email: "hello@mediterraneanbites.com",
            link: "https://www.mediterraneanbites.com"
        }
    },
    {
        name: "Dim Sum Delight",
        cuisine: "Chinese",
        description: "Steamed and fried dim sum favorites served fresh daily.",
        contact: {
            phone: "901-234-5678",
            email: "order@dimsumdelight.com",
            link: "https://www.dimsumdelight.com"
        }
    },
    {
        name: "Crepe Corner",
        cuisine: "French",
        description: "Sweet and savory crepes made with authentic French recipes.",
        contact: {
            phone: "012-345-6789",
            email: "support@crepecorner.com",
            link: "https://www.crepecorner.com"
        }
    }
];

console.log(foodVendors);

  return (
    <div className='pt-5 over-flow-y-scroll'>
      <div className="flex items-center justify-center">
        <h1 className="font-base text-md font-bold text-gray-500 mr-auto ml-auto">Available Vendors</h1>
      </div>

      <div className="flex flex-col gap-2 p-4 items-center justify-center w-[90%] mr-auto ml-auto">
        {foodVendors.map((vendor, index) => (
          <div key={index} className='flex flex-col p-4 w-[100%] border-2 border-gray-400 rounded-lg'>
            <h1>{vendor.name}</h1>
            <h1>{vendor.cuisine}</h1>
            <h1>{vendor.description}</h1>
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
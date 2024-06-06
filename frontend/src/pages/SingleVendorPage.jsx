import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { customer_get_vendor } from '@/store/profiles/customer-thunks'
import { getVendorItems } from '@/store/menu-items/menuItems-thunks'



const SingleVendorPage = () => {
    const {vendor_loading, customer_vendor_profile} = useSelector(state => state.customerProfile)
    const {vendor_items} = useSelector(state => state.menuItem)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(customer_get_vendor(id))
        dispatch(getVendorItems(id))
    },[])
  return (
    <div>SingleVendorPage</div>
  )
}

export default SingleVendorPage
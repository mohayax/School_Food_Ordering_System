import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCustomerProfile } from '@/store/profiles/customer-thunks'
import { useEffect, useCallback } from 'react'
import { getVendorList } from '@/store/profiles/vendor-thunks'

const CustomerDashboard = () => {
  const {customer} = useSelector(state => state.customerProfile)
  const {vendors} = useSelector(state => state.vendorList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCustomerProfile())
    dispatch(getVendorList())
  }, [])
  return (
    <div>CustomerDashboard
      <div>
        <h1>Hi, {customer.first_name}</h1>
        <h1>{customer.last_name}</h1>
      </div>
      <div>
        {vendors.map((vendor) => (
            <>
            <h1>11{vendor.vendor_name}</h1>
            <p>{vendor.vendor_description}</p>
            </>
    
        ))}
      </div>
    </div>
  )
}

export default CustomerDashboard
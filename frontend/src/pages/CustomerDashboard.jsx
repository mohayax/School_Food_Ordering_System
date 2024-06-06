import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCustomerProfile } from '@/store/profiles/customer-thunks'
import { useEffect, useState } from 'react'
import { getVendorList } from '@/store/profiles/vendor-thunks'
import { useHistory } from 'react-router-dom';

const CustomerDashboard = () => {
  const [itemId, setId] = useState("")
  const {customer} = useSelector(state => state.customerProfile)
  const {vendors} = useSelector(state => state.vendorList)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getCustomerProfile())
    dispatch(getVendorList())
  }, [])

  const viewVendor = (id) =>{
    history.push(`/vendor/${id}`)
  }
  return (
    <div>CustomerDashboard
      <div>
        <h1>Hi, {customer.first_name}</h1>
        <h1>{customer.last_name}</h1>
      </div>
    
        {vendors.map((vendor) => (
            <div>
            <p>{vendor.id}</p>
            <h1>11{vendor.vendor_name}</h1>
            <p>{vendor.vendor_description}</p>
            <button onClick={() => viewVendor(vendor.id)}>view vendor</button>
            </div>
        ))}

    </div>
  )
}

export default CustomerDashboard
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCustomerProfile, getCustomerProfile } from '@/store/profiles/customer-thunks'
import CustomerProfileAction from '@/component/CustomerProfileAction'

const CustomerProfilePage = () => {
  const {customer} = useSelector(state => state.customerProfile)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getCustomerProfile())
  }, [dispatch])
  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-5 text-center">Profile Information</h2>
      <div className="mb-4 flex flex-row gap-6">
        <label className="block text-gray-600">First Name:</label>
        <p className="text-lg">{customer.first_name}</p>

      </div>
      <div className="mb-4 flex flex-row gap-6">
        <label className="block text-gray-600">Last Name:</label>
        <p className="text-lg">{customer.last_name}</p>
      </div>
      
      <div className="mb-4 flex flex-row gap-6">
        <label className="block text-gray-600">Date of Birth:</label>
        <p className="text-lg">{customer.customer_dob}</p>
      </div>
      <div className="mb-4 flex flex-row gap-6">
        <label className="block text-gray-600">Phone Number:</label>
        <p className="text-lg">{customer.phone_number}</p>
      </div>

      <CustomerProfileAction 
      defaultValues={{
        first_name: customer.first_name,
        last_name: customer.last_name,
        customer_dob: customer.customer_dob,
        phone_number: customer.phone_number 
      }}
      />
    </div>
  )
}

export default CustomerProfilePage
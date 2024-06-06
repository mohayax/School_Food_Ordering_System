import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getVendorList } from '@/store/profiles/vendor-thunks'

const VendorDashboard = () => {
    
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getVendorList())
    // }, [])

  return (
    <div>VendorDashboard
    </div>
  )
}

export default VendorDashboard
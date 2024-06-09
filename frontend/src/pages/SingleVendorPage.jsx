import React from 'react'
import { useParams,  useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { customer_get_vendor } from '@/store/profiles/customer-thunks'
import { getVendorItems } from '@/store/menu-items/menuItems-thunks'
import { add_to_cart } from '@/store/cart/cart-thunks'
import { quotelessJson } from 'zod'



const SingleVendorPage = () => {
    const {vendor_loading, customer_vendor_profile} = useSelector(state => state.customerProfile)
    const {vendor_items} = useSelector(state => state.menuItem)
    const [item_quantity, setQuantity] = useState(1)
    const {id} = useParams()
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleView = (item_id) =>{
      navigate(`item/${item_id}`)
    }


    const addToCart = (id, quantity) =>{
      dispatch(add_to_cart({item_id: id, data:{item_quantity: quantity}}))
      console.log("quantity---", id)
    }

    useEffect(()=>{
        dispatch(customer_get_vendor(id))
        dispatch(getVendorItems(id))
    },[])

    console.log('ventdor item.. form page', vendor_items)
  return (
    <div>SingleVendorPage---
      <h2>{customer_vendor_profile.vendor_name}</h2>
      
      {vendor_items !== null ? vendor_items.map((item) => 
        <div key={item.id}>
          <h1>ee{item.item_name}</h1>
          <h2>ee{item.item_description}</h2>
          <h2>ee{item.item_price}</h2>
          <input type="number" 
          className='border-black'
          value={item_quantity} 
          name='item_quantity'
          onChange={(e) => setQuantity(e.target.value)} />
          <button onClick={() =>  handleView(item.id)}>view item</button>
          <button onClick={() =>  addToCart(item.id,  item_quantity)}>add to cart</button>
        </div>
      ) : <div>coming...</div>}
    </div>
  )
}

export default SingleVendorPage
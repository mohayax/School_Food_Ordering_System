import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { get_user_cart_items } from '@/store/cart/cart-thunks'

const Cart = () => {
    const {items_loading, cart_items} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_user_cart_items())
    }, [])

    console.log("cart-items from page", cart_items)
    if (items_loading || cart_items == null){
        return <>
            <h1>loading...</h1>
        </>
    } else{
  return (
    <div>Cart
        {cart_items.map((item) => (
            <div key={item.id}>
                <h1>{item.item_name}</h1>
                <h1> qty:{item.item_quantity}</h1>
                <h1> price: {item.item_price}</h1>
                <h1>Total: {item.total_price}</h1>
            </div>
        ))}
    </div>
  )}
}

export default Cart
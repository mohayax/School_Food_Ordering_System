import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { get_user_cart_items, update_cart_item, remove_cart_item, get_user_cart } from '@/store/cart/cart-thunks'
import { place_order } from '@/store/order/order-thunks'
import { getCustomerProfile } from '@/store/profiles/customer-thunks'
import Header from '@/component/Header'
import displayImg from '../assets/displayImg.jpg'
import { GoTrash } from "react-icons/go";
import { place_item_order } from '@/store/order/order-thunks'

const Cart = () => {

    const {items_loading, cart_items, user_cart} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_user_cart_items())
        dispatch(get_user_cart())
        dispatch(getCustomerProfile())
    }, [dispatch])
    return(
        <>
        <Header/>
        <div className='flex justify-between mr-auto ml-auto w-[90%] gap-10 min-h-[81vh]'>
            <section className='flex flex-col w-[65%] mt-28'>
                <div className='flex justify-between h-10 px-2 items-center  '>
                    <h1 className='text-xl font-base font-medium text-gray-600'>My Cart</h1>
                    <h1 className='text-md font-base font-medium text-gray-600 mr-6'>Items - {user_cart.total_items || "..."}</h1>
                </div>

                <div className='flex flex-col  mt-5'>
                    <div className='flex justify-between h-10 p-2 border-t-2 border-b-2 border-gray-400 items-center'>
                        <h1 className='text-lg font-base font-medium text-gray-600'>Item</h1>
                        <div className='inline-flex gap-14  mr-56'>
                            <h1 className='text-lg font-base font-medium text-gray-600'>Price</h1>
                            <h1 className='text-lg font-base font-medium text-gray-600'>Qty</h1>
                            <h1 className='text-lg font-base font-medium text-gray-600'>Subtotal</h1>
                        </div>
                    </div>

                    <div className='flex flex-col '>
                        { cart_items.length !== 0 ? ( cart_items.map((item) => 
                            <div className='flex justify-between h-28 border-b-[1px] border-gray-400'>
                                <div className='flex gap-4'>
                                    <div className='w-32 h-full py-2 px-2'>
                                        <img src={item.item_photo.startsWith('http')
                                                    ? item.item_photo
                                                    : `http://localhost:8000${item.item_photo}`}    alt="" srcset="" className='w-full h-full rounded-lg'/>
                                    </div>
                                    <div className='flex flex-col py-2 gap-2 w-24'>
                                        <p className='text-lg font-base font-semibold text-gray-700'>{item.item_name}</p>
                                        {item.availability_status === "Available" ? (<p className='text-xs text-gray-500 font-base'>available</p>): (<p className='text-xs text-gray-500 font-base'>sold out</p>)}
                                       
                                    </div>
                                </div>

                                <div className='inline-flex gap-16 items-center mr-4'>
                                    <p className='text-md font-base font-medium text-gray-600 ml-6'>₦ {item.item_price}</p>
                                    <div className='inline-flex items-center gap-4'>
                                        {/* <button className='font-base text-lg text-gray-700 font-semibold' onClick={() =>  dispatch(update_cart_item({item_id: item.id, data:{item_quantity: item.item_quantity -1}}))}>-</button> */}
                                        <p className='font-base text-md text-gray-700 font-semibold'>{item.item_quantity}</p>
                                        {/* <button className='font-base text-md text-gray-700 font-semibold' onClick={() => dispatch(update_cart_item({item_id: item.id, data:{item_quantity: item.item_quantity + 1}})).then(dispatch(get_user_cart())).then(dispatch(get_user_cart_items()))}>+</button> */}
                                    </div>
                                    <p className='text-md font-base font-medium text-gray-600'>₦ {item.total_price}</p>
                                    <button className='inline-flex gap-2 items-center text-lg text-red-600' onClick={() => dispatch(remove_cart_item(item.id)).then(dispatch(get_user_cart())).then(dispatch(get_user_cart_items()))}><GoTrash/></button>
                                </div>
                                <button className='text-sm  py-1 px-1 hover:bg-gray-200' onClick={() => dispatch(place_item_order(item.id)).then(dispatch(get_user_cart())).then(dispatch(get_user_cart_items()))}>Place Order</button>
                            </div>
                            
                        )):(
                            <div className='flex justify-center items-center mt-auto p-32'>
                                <h1 className='text-gray-600 text-2xl font-normal'>No Items</h1>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-[20%] h-72 bg-slate-100 mt-28 pt-4 px-6'>
                <h1 className='text-xl font-base font-medium text-gray-600 mb-6'>Summary</h1>
                <div className='flex flex-col border-b-[1px] border-gray-700'>
                    <div className='inline-flex justify-between '>
                        <p>Items:</p>
                        <p>{user_cart.total_items || 0}</p>
                    </div>
                    
                    <div className='inline-flex justify-between '>
                        <p>Subtotal:</p>
                        <p>{user_cart.total_price || 0}</p>
                    </div>
                    
                </div>
                <div className='inline-flex justify-between mt-4'>
                        <p>Total:</p>
                        <p>{user_cart.total_price || 0}</p>
                </div>
                {/* <button className='w-full border-2 border-gray-500 mt-5 p-2 hover:bg-gray-200' onClick={() => dispatch(place_order()).then(dispatch(get_user_cart())).then(dispatch(get_user_cart_items()))}>Place Order</button> */}
            </section>

        </div>

        <footer className='bg-slate-200 flex items-center justify-center p-6 mt-12 '>
            <p className='font-base text-gray-600 font-semibold '>Copyright <span>&copy;</span> Baze Food Mart 2024</p>
        </footer>
        </>
    )
}

export default Cart
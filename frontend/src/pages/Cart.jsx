import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { get_user_cart_items, update_cart_item } from '@/store/cart/cart-thunks'
import Header from '@/component/Header'
import displayImg from '../assets/displayImg.jpg'
import { GoTrash } from "react-icons/go";

const Cart = () => {
//     const {items_loading, cart_items} = useSelector(state => state.cart)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(get_user_cart_items())
//     }, [])

//     console.log("cart-items from page", cart_items)
//     if (items_loading || cart_items == null){
//         return <>
//             <h1>loading...</h1>
//         </>
//     } else{
//   return (
//     <div>Cart
//         {cart_items.map((item) => (
//             <div key={item.id}>
//                 <h1>{item.item_name}</h1>
//                 <h1> qty:{item.item_quantity}</h1>
//                 <h1> price: {item.item_price}</h1>
//                 <h1>Total: {item.total_price}</h1>
//             </div>
//         ))}
//     </div>
//   )}

// const cartItems = null
const cartItems = [
   
    {
      id: 1,
      name: "Margherita Pizza",
      photo: displayImg,
      description: "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      price: 12.99,
      category: "food",
      availability_status: true
    },
    {
      id: 2,
      name: "Grilled Salmon",
      photo: displayImg,
      description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
      price: 15.99,
      category: "food",
      availability_status: false
    },
    {
      id: 3,
      name: "Vegetable Stir-fry",
      photo: displayImg,
      description: "Mixed vegetables stir-fried with soy sauce and ginger, served with steamed rice.",
      price: 10.99,
      category: "food",
      availability_status: true
    },
    {
      id: 4,
      name: "Spaghetti Carbonara",
      photo: displayImg,
      description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      price: 11.99,
      category: "food",
      availability_status: false
    },
    ]

    return(
        <>
        <Header/>
        <div className='flex justify-between mr-auto ml-auto w-[90%] gap-10 min-h-[81vh]'>
            <section className='flex flex-col w-[65%] mt-28'>
                <div className='flex justify-between h-10 px-2 items-center  '>
                    <h1 className='text-xl font-base font-medium text-gray-600'>My Cart</h1>
                    <h1 className='text-md font-base font-medium text-gray-600 mr-6'>Items - 2</h1>
                </div>

                <div className='flex flex-col  mt-5'>
                    <div className='flex justify-between h-10 p-2 border-t-2 border-b-2 border-gray-400 items-center'>
                        <h1 className='text-lg font-base font-medium text-gray-600'>Item</h1>
                        <div className='inline-flex gap-16  mr-24'>
                            <h1 className='text-lg font-base font-medium text-gray-600'>Price</h1>
                            <h1 className='text-lg font-base font-medium text-gray-600'>Quantity</h1>
                            <h1 className='text-lg font-base font-medium text-gray-600'>Subtotal</h1>
                        </div>
                    </div>

                    <div className='flex flex-col '>
                        { cartItems !== null ? ( cartItems.map((item) => 
                            <div className='flex justify-between h-28 border-b-[1px] border-gray-400'>
                                <div className='flex gap-4'>
                                    <div className='w-32 h-full py-2 px-2'>
                                        <img src={item.photo} alt="" srcset="" className='w-full h-full rounded-lg'/>
                                    </div>
                                    <div className='flex flex-col py-2 gap-2'>
                                        <p className='text-lg font-base font-semibold text-gray-700'>{item.name}</p>
                                        {item.availability_status == true ? (<p className='text-xs text-gray-500 font-base'>available</p>): (<p className='text-xs text-gray-500 font-base'>sold out</p>)}
                                       
                                    </div>
                                </div>

                                <div className='inline-flex gap-16 items-center mr-8'>
                                    <p className='text-md font-base font-medium text-gray-600'>₦ {item.price}</p>
                                    <div className='inline-flex items-center gap-4'>
                                        <button className='font-base text-lg text-gray-700 font-semibold'>-</button>
                                        <p className='font-base text-md text-gray-700 font-semibold'>2</p>
                                        <button className='font-base text-md text-gray-700 font-semibold'>+</button>
                                    </div>
                                    <p className='text-md font-base font-medium text-gray-600'>₦ {item.price}</p>
                                    <button className='inline-flex gap-2 items-center text-lg text-red-600'><GoTrash/></button>
                                </div>
                            </div>
                            
                        )):(
                            <div className='flex justify-center items-center mt-auto p-32'>
                                <h1 className='text-gray-600 text-2xl font-normal'>No Items</h1>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-[35%] h-72 bg-slate-100 mt-28 pt-4 px-6'>
                <h1 className='text-xl font-base font-medium text-gray-600 mb-6'>Summary</h1>
                <div className='flex flex-col border-b-[1px] border-gray-700'>
                    <div className='inline-flex justify-between '>
                        <p>Items:</p>
                        <p>3</p>
                    </div>
                    
                    <div className='inline-flex justify-between '>
                        <p>Subtotal:</p>
                        <p>1239.00</p>
                    </div>
                    
                </div>
                <div className='inline-flex justify-between mt-4'>
                        <p>Total:</p>
                        <p>1239.00</p>
                </div>
                <button className='w-full border-2 border-gray-500 mt-5 p-2 hover:bg-gray-200'>Checkout</button>
            </section>

        </div>

        <footer className='bg-slate-200 flex items-center justify-center p-6 mt-12 '>
            <p className='font-base text-gray-600 font-semibold '>Copyright <span>&copy;</span> Baze Food Mart 2024</p>
        </footer>
        </>
    )
}

export default Cart
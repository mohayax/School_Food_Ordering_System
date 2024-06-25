import React from 'react'
import { useParams,  useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { customer_get_vendor } from '@/store/profiles/customer-thunks'
import { getVendorItems } from '@/store/menu-items/menuItems-thunks'
import { add_to_cart } from '@/store/cart/cart-thunks'
import { quotelessJson } from 'zod'
import Header from '@/component/Header'
import displayImg from '../assets/displayImg.jpg'
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiDrinks2Line } from "react-icons/ri";
import { PiHamburger } from "react-icons/pi";
import { FaBowlRice } from "react-icons/fa6";

const SingleVendorPage = () => {

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      photo: displayImg,
      description: "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      price: 12.99,
      category: "food",
      isVegetarian: true
    },
    {
      id: 2,
      name: "Caesar Salad",
      photo: displayImg,
      description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
      price: 8.99,
      category: "Appetizer",
      isVegetarian: false
    },
    {
      id: 3,
      name: "Grilled Salmon",
      photo: displayImg,
      description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
      price: 15.99,
      category: "food",
      isVegetarian: false
    },
    {
      id: 4,
      name: "Vegetable Stir-fry",
      photo: displayImg,
      description: "Mixed vegetables stir-fried with soy sauce and ginger, served with steamed rice.",
      price: 10.99,
      category: "food",
      isVegetarian: true
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      photo: displayImg,
      description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
      price: 6.99,
      category: "Dessert",
      isVegetarian: true
    },
    {
      id: 6,
      name: "Spaghetti Carbonara",
      photo: displayImg,
      description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      price: 11.99,
      category: "food",
      isVegetarian: false
    }
  ];
  
  
   
    // const {vendor_loading, customer_vendor_profile} = useSelector(state => state.customerProfile)
    // const {vendor_items} = useSelector(state => state.menuItem)
    // const [item_quantity, setQuantity] = useState(1)
    // const {id} = useParams()
    
    // const dispatch = useDispatch()
    // const navigate = useNavigate()

    // const handleView = (item_id) =>{
    //   navigate(`item/${item_id}`)
    // }


    // const addToCart = (id, quantity) =>{
    //   dispatch(add_to_cart({item_id: id, data:{item_quantity: quantity}}))
    //   console.log("quantity---", id)
    // }

    // useEffect(()=>{
    //     dispatch(customer_get_vendor(id))
    //     dispatch(getVendorItems(id))
    // },[])

    // console.log('ventdor item.. form page', vendor_items)
  return (
    <>
    <Header/>
    <div className="flex items-center justify-center">
        <h1 className="font-base text-lg font-bold text-gray-500 mr-auto ml-auto mt-28 mb-5">The Brim catering Services Ltd.</h1>
    </div>
    <section className='flex justify-between w-[90%] ml-auto mr-auto  px-10 gap-28 bg-slate-100 rounded-xl h-56'>
  
      <div className='w-1/2 mt-10'>
        <p className='text-lg font-base text-gray-600 w-[80%] h-20 overflow-hidden'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quam qui sed veritatis enim numquam et consectetur fuga iste 
          ratione praesentium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quam sunt architecto corrupti at eveniet laboriosam eligendi corporis dolorem perferendis, eaque nulla modi ea dolores in sequi. Veniam, illum dicta!
        </p>

        <div className='flex gap-4 mt-11'>
          <span className='inline-flex items-center gap-2 text-xs text-gray-600'><AiOutlineClockCircle/> <p>Open: 9:00am - 7:00pm</p></span>
          <span className='inline-flex items-center gap-2 text-xs text-gray-600'><CiLocationOn/> <p>Opposite block c, Baze University</p></span>
          <span className='inline-flex items-center gap-2 text-xs text-gray-600'><BsTelephone/> <p>080-99-328</p></span>
        </div>
      </div>
      <div className='w-1/2 mt-20'>
        <img src={displayImg}  className='rounded-xl h-52 w-[70%] shadow-md'/>
      </div>
    </section>

    <div className='w-[90%] mr-auto ml-auto'>
      {/* <div className="flex items-center justify-center">
          <h1 className="font-base text-lg font-bold text-gray-500 mr-auto ml-auto mt-28">Our Menu</h1>
      </div> */}
      <div className='flex items-center justify-between mt-28'>
        <p className='font-base text-lg text-gray-600 font-bold'>Categories</p>
        <a href='#food' className='bg-slate-300 text-gray-600 px-8 py-2 rounded-xl font-base inline-flex gap-2 items-center'>Drinks <span className='text-gray-700'><RiDrinks2Line/></span></a>
        <a className='bg-slate-300 text-gray-600 px-8 py-2 rounded-xl font-base inline-flex gap-2 items-center'>Snacks <span className='text-gray-700'><PiHamburger/></span></a>
        <a className='bg-slate-300 text-gray-600 px-8 py-2 rounded-xl font-base inline-flex gap-2 items-center'>Food <span className='text-gray-700'><FaBowlRice/></span></a>
      </div>
    </div>
    
    <section id='food' className='w-[90%] mr-auto ml-auto'>
      <div className="flex items-center justify-center">
        <h1 className="font-base text-lg font-bold text-gray-500 mr-auto ml-auto mt-20">Food</h1>
      </div>

      <div>
        {menuItems.map((item, index) => ( item.category == 'food' && <div >
          <p key={index}>{item.name}</p>
        </div>
      
       ))}
      </div>
    </section>
    
    
    <div>
      {/* <h2>{customer_vendor_profile.vendor_name}</h2>
      
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
      ) : <div>coming...</div>} */}
    </div>
    </>
    
  )
}

export default SingleVendorPage
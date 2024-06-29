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
import { FaCheckCircle } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go"
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Modal from '@/component/Modal'

const SingleVendorPage = () => {

const  menuItems = [
  // Food
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
  {
    id: 5,
    name: "Chicken Alfredo",
    photo: displayImg,
    description: "Grilled chicken served over fettuccine pasta with Alfredo sauce.",
    price: 13.99,
    category: "food",
    availability_status: true
  },
  {
    id: 6,
    name: "Beef Tacos",
    photo: displayImg,
    description: "Soft tortillas filled with seasoned beef, lettuce, tomato, and cheese.",
    price: 9.99,
    category: "food",
    availability_status: true
  },
  {
    id: 7,
    name: "Vegetable Lasagna",
    photo: displayImg,
    description: "Layers of pasta, vegetables, and cheese, baked to perfection.",
    price: 14.99,
    category: "food",
    availability_status: false
  },
  {
    id: 8,
    name: "Chicken Parmesan",
    photo: displayImg,
    description: "Breaded chicken breast topped with marinara sauce and melted mozzarella.",
    price: 12.99,
    category: "food",
    availability_status: true
  },

  // Drinks
  {
    id: 9,
    name: "Lemonade",
    photo: displayImg,
    description: "Refreshing homemade lemonade with a hint of mint.",
    price: 3.99,
    category: "drinks",
    availability_status: true
  },
  {
    id: 10,
    name: "Iced Coffee",
    photo: displayImg,
    description: "Cold brewed coffee served with ice and a splash of milk.",
    price: 4.99,
    category: "drinks",
    availability_status: true
  },
  {
    id: 11,
    name: "Green Tea",
    photo: displayImg,
    description: "Hot green tea brewed from high-quality tea leaves.",
    price: 2.99,
    category: "drinks",
    availability_status: true
  },
  {
    id: 12,
    name: "Mango Smoothie",
    photo: displayImg,
    description: "Blended mango, yogurt, and a touch of honey.",
    price: 5.99,
    category: "drinks",
    availability_status: false
  },
  {
    id: 13,
    name: "Orange Juice",
    photo: displayImg,
    description: "Freshly squeezed orange juice, full of vitamins.",
    price: 3.99,
    category: "drinks",
    availability_status: true
  },
  {
    id: 14,
    name: "Hot Chocolate",
    photo: displayImg,
    description: "Rich and creamy hot chocolate topped with whipped cream.",
    price: 4.49,
    category: "drinks",
    availability_status: true
  },
  {
    id: 15,
    name: "Strawberry Milkshake",
    photo: displayImg,
    description: "Blended strawberries, ice cream, and milk.",
    price: 5.49,
    category: "drinks",
    availability_status: true
  },
  {
    id: 16,
    name: "Sparkling Water",
    photo: displayImg,
    description: "Carbonated water with a slice of lemon.",
    price: 2.49,
    category: "drinks",
    availability_status: false
  },

  // Snacks
  {
    id: 17,
    name: "French Fries",
    photo: displayImg,
    description: "Crispy golden fries served with ketchup.",
    price: 2.99,
    category: "snacks",
    availability_status: true
  },
  {
    id: 18,
    name: "Nachos",
    photo: displayImg,
    description: "Corn tortilla chips topped with melted cheese and jalapeños.",
    price: 6.99,
    category: "snacks",
    availability_status: false
  },
  {
    id: 19,
    name: "Chicken Wings",
    photo: displayImg,
    description: "Spicy chicken wings served with blue cheese dip.",
    price: 7.99,
    category: "snacks",
    availability_status: true
  },
  {
    id: 20,
    name: "Pretzel Bites",
    photo: displayImg,
    description: "Soft pretzel bites served with cheese sauce.",
    price: 5.49,
    category: "snacks",
    availability_status: true
  },
  {
    id: 21,
    name: "Mozzarella Sticks",
    photo: displayImg,
    description: "Fried mozzarella sticks served with marinara sauce.",
    price: 6.49,
    category: "snacks",
    availability_status: false
  },
  {
    id: 22,
    name: "Onion Rings",
    photo: displayImg,
    description: "Crispy onion rings served with ranch dressing.",
    price: 5.99,
    category: "snacks",
    availability_status: true
  },
  {
    id: 23,
    name: "Popcorn",
    photo: displayImg,
    description: "Butter-flavored popcorn, perfect for snacking.",
    price: 3.49,
    category: "snacks",
    availability_status: true
  },
  {
    id: 24,
    name: "Chips and Salsa",
    photo: displayImg,
    description: "Corn chips served with fresh salsa.",
    price: 4.99,
    category: "snacks",
    availability_status: false
  }
];

const snacks = menuItems.filter(item => item.category === 'snacks')
const food =  menuItems.filter(item => item.category === 'food')
const drinks =  menuItems.filter(item => item.category === 'drinks')


const [snacksPage, setSnacksPage] = useState(1)
const [foodPage, setFoodPage] = useState(1) 
const [drinksPage, setDrinksPage] = useState(1) 

const items_per_page = 4

const handleDrinksNext = () => setDrinksPage(drinksPage + 1) 
const handlePrevDrinks =  () => setDrinksPage(drinksPage - 1) 

const handleFoodNext = () => setFoodPage(foodPage + 1) 
const handlePrevFood =  () => setFoodPage(foodPage - 1) 

const handleSnacksNext = () => setSnacksPage(snacksPage + 1) 
const handlePrevSnacks =  () => setSnacksPage(snacksPage - 1)


const snacksStartIndex = (snacksPage - 1 ) * items_per_page
const snackEndIndex = snacksStartIndex + items_per_page
const snacksToDisplay = snacks.slice(snacksStartIndex, snackEndIndex)


const foodStartIndex = (foodPage - 1 ) * items_per_page
const foodEndIndex = foodStartIndex + items_per_page
const foodToDisplay = food.slice(foodStartIndex, foodEndIndex)

const drinksStartIndex = (drinksPage - 1 ) * items_per_page
const drinksEndIndex = drinksStartIndex + items_per_page
const drinksToDisplay = drinks.slice(drinksStartIndex, drinksEndIndex)
   
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
    <section id='hero-section' className='flex justify-between w-[90%] ml-auto mr-auto  px-10 gap-28 bg-slate-200 rounded-xl h-56'>
  
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

    <div className='w-[90%] mr-auto ml-auto bg-slate-200 rounded-lg  px-6 py-4 mt-28'>
      {/* <div className="flex items-center justify-center">
          <h1 className="font-base text-lg font-bold text-gray-500 mr-auto ml-auto mt-28">Our Menu</h1>
      </div> */}
      <div className='flex items-center justify-between'>
        <p className='font-base text-lg text-gray-600 font-bold '>Categories</p>
        <div className='flex gap-4'>
        <a href='#drinks' className='border-2 border-gray-600 text-gray-900 px-8 py-2  font-semibold font-base inline-flex gap-2 items-center hover:bg-gray-300'>Drinks <span className='text-gray-700'><RiDrinks2Line/></span></a>
        <a href='#snacks'   className='border-2 border-gray-600 text-gray-900 px-8 py-2 font-semibold font-base inline-flex gap-2 items-center hover:bg-gray-300'>Snacks <span className='text-gray-700'><PiHamburger/></span></a>
        <a href='#food'  className='border-2 border-gray-600 text-gray-900 px-8 py-2 font-semibold font-base inline-flex gap-2 items-center hover:bg-gray-300'>Food <span className='text-gray-700'><FaBowlRice/></span></a>
        </div>
      
      </div>
    </div>
    
    <section id='food' className='w-[90%] mr-auto ml-auto mt-10'>
      
      <h1 className="font-base text-lg font-bold text-gray-500 ">Food</h1>
      

      <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
        {foodToDisplay.map((item) => ( <div key={item.id} className='flex flex-col w-72 h-80 bg-slate-200 shadow-sm hover:shadow-2xl border-2 border-gray-300'>
          <div className='h-[57%] w-full'>
            <img src={item.photo}  className='h-full w-full'/>
          </div>
          
          <div className='flex flex-col px-2 pb-4'>
            <div className='flex justify-between'>
              <h2 className='font-base text-sm text-gray-900 font-semibold mt-2'>{item.name}</h2>
              <div className='flex flex-col justify-center items-center pt-2'>
                {item.availability_status === true ? (<>
                  <FaCheckCircle className='text-sm text-green-700 text-center'/>
                  <p className='font-base text-xs text-gray-600 text-center'>Available</p>
                </>): (<>
                  <GoCircleSlash className='text-sm text-red-700 text-center font-bold'/>
                  <p className='font-base text-xs text-gray-600 text-center'>Sold Out</p>
                </>)}
                
              </div>
            </div>
            
            <div className='flex  h-12'>
              <p className='font-base text-sm  mt-2 text-gray-600 t'>{item.description}</p>
            </div> 
            <div className='flex justify-between items-center mt-1'>
              <p className='text-lg font-base font-semibold'>₦{item.price}</p>
              <Modal
              title="Select Quantity"
              label="Qty"
              btnText="Add"
              />
            </div>
          </div>
        </div>
      
       ))}
      </div>

      <div className='flex items-center justify-center gap-20 mt-10'>
        <button
          onClick={() => handlePrevFood()} 
          disabled={foodPage == 1}
         className={`font-semibold text-xl text-gray-600 inline-flex items-center ${foodPage == 1 && 'text-slate-400'}`}><GrPrevious className='text-2xl'/>Prev</button>
        <button 
        onClick={() => handleFoodNext()}
        disabled={foodEndIndex >= food.length}
        className={`font-semibold text-xl text-gray-600 inline-flex items-center ${foodEndIndex >= food.length && 'text-slate-400'}`}>Next<GrNext className='text-2xl'/></button>
      </div>
    </section>


    <section id='drinks' className='w-[90%] mr-auto ml-auto mt-10'>
      
      <h1 className="font-base text-lg font-bold text-gray-500 ">Drinks</h1>
      

      <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
        {drinksToDisplay.map((item) => (<div key={item.id} className='flex flex-col w-72 h-80 bg-slate-200 shadow-sm hover:shadow-2xl border-2 border-gray-300'>
          <div className='h-[57%] w-full'>
            <img src={item.photo}  className='h-full w-full'/>
          </div>
          
          <div className='flex flex-col px-2 pb-4'>
            <div className='flex justify-between'>
              <h2 className='font-base text-sm text-gray-900 font-semibold mt-2'>{item.name}</h2>
              <div className='flex flex-col justify-center items-center pt-2'>
                {item.availability_status === true ? (<>
                  <FaCheckCircle className='text-sm text-green-700 text-center'/>
                  <p className='font-base text-xs text-gray-600 text-center'>Available</p>
                </>): (<>
                  <GoCircleSlash className='text-sm text-red-700 text-center font-bold'/>
                  <p className='font-base text-xs text-gray-600 text-center'>Sold Out</p>
                </>)}
                
              </div>
            </div>
            
            <div className='flex  h-12'>
              <p className='font-base text-sm  mt-2 text-gray-600 t'>{item.description}</p>
            </div> 
            <div className='flex justify-between items-center mt-1'>
              <p className='text-lg font-base font-semibold'>₦{item.price}</p>
              <Modal
              title="Select Quantity"
              label="Qty"
              btnText="Add"
              />
            </div>
          </div>
        </div>
      
       ))}
      </div>

      <div className='flex items-center justify-center gap-20 mt-10'>
        <button
          onClick={() => handlePrevDrinks()} 
          disabled={drinksPage == 1}
         className={`font-semibold text-xl text-gray-600 inline-flex items-center ${drinksPage == 1 && 'text-slate-400'}`}><GrPrevious className='text-2xl'/>Prev</button>
        <button 
        onClick={() => handleDrinksNext()}
        disabled={drinksEndIndex >= drinks.length}
        className={`font-semibold text-xl text-gray-600 inline-flex items-center ${drinksEndIndex >= drinks.length && 'text-slate-400'}`}>Next<GrNext className='text-2xl'/></button>
      </div>
    </section>


    <section id='snacks' className='w-[90%] mr-auto ml-auto mt-10'>
      
      <h1 className="font-base text-lg font-bold text-gray-500 ">Snacks</h1>
      

      <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
        {snacksToDisplay.map((item) => (<div key={item.id} className='flex flex-col w-72 h-80 bg-slate-200  shadow-sm hover:shadow-2xl border-2 border-gray-300'>
          <div className='h-[57%] w-full'>
            <img src={item.photo}  className='h-full w-full '/>
          </div>
          
          <div className='flex flex-col px-2 pb-4'>
            <div className='flex justify-between'>
              <h2 className='font-base text-sm text-gray-900 font-semibold mt-2'>{item.name}</h2>
              <div className='flex flex-col justify-center items-center pt-2'>
                {item.availability_status === true ? (<>
                  <FaCheckCircle className='text-sm text-green-700 text-center'/>
                  <p className='font-base text-xs text-gray-600 text-center'>Available</p>
                </>): (<>
                  <GoCircleSlash className='text-sm text-red-700 text-center font-bold'/>
                  <p className='font-base text-xs text-gray-600 text-center'>Sold Out</p>
                </>)}
                
              </div>
            </div>
            
           <div className='flex  h-12'>
              <p className='font-base text-sm  mt-2 text-gray-600 t'>{item.description}</p>
            </div> 
            <div className='flex justify-between items-center mt-1'>
              <p className='text-lg font-base font-semibold'>₦{item.price}</p>
              <Modal
              title="Select Quantity"
              label="Qty"
              btnText="Add"
              />
            </div>
          </div>
        </div>
      
       ))}
      </div>

      <div className='flex items-center justify-center gap-20 mt-10'>
        <button
          onClick={() => handlePrevSnacks()} 
          disabled={snacksPage == 1}
         className={`font-semibold text-xl text-gray-600 inline-flex items-center ${snacksPage == 1 && 'text-slate-400'}`}><GrPrevious className='text-2xl'/>Prev</button>
        <button 
        onClick={() => handleSnacksNext()}
        disabled={snackEndIndex >= snacks.length}
        className={`font-semibold text-xl text-gray-600 inline-flex items-center ${snackEndIndex >= snacks.length && 'text-slate-400'}`}>Next<GrNext className='text-2xl'/></button>
      </div>
    </section>
    
    
    {/* <div>
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
    </div> */}
    <footer className='bg-slate-200 flex items-center justify-center p-6 mt-14'>
        <p className='font-base text-gray-600 font-semibold'>Copyright <span>&copy;</span> Baze Food Mart 2024</p>
    </footer>
    </>
    
  )
}

export default SingleVendorPage
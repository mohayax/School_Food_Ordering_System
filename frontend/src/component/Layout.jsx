import Header from "./Header"
import { BsPerson, BsShop  } from "react-icons/bs";
import { AiOutlineLogout} from "react-icons/ai";
import { RiFolderHistoryFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa"
import logo from '../assets/bu-lg.png'
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "@/store/auth/loginSlice";

const Layout = ({children}) => {
  const dispatch = useDispatch()

  const Menus = [
    { title: "Baze Food Mart", icon: <BsShop/>, top: true, link: '/customer-view' },
    { title: "My Profile", icon: <BsPerson/>, link: '/customer-view/profile' },
    { title: "Order History", icon: <RiFolderHistoryFill/>, link: '/customer-view/order-history' },
    { title: "My Cart", icon: <FaShoppingCart/>, link: '/customer-view/cart'},
    { title: "Logout", icon: <AiOutlineLogout/>, spacing: true, logout: true },
  ];
  
  const  {isLoading, recommendations} = useSelector(state => state.recommendations)
  const [active, setActive] = useState('/customer-view')
  

  const navigate = useNavigate()
  return ( 
        <div className="flex h-screen">
        <Header/>
          <div className="w-1/5 bg-slate-100 p-4  mt-20 pl-8">
            
            <ul className="pt-2">

              {Menus.map((item,index) => (

                <>
                  <li key={index}>
                    <Link 
                      className={`text-gray-300  flex items-center
                        gap-x-4 cursor-pointer p-2 hover:bg-light-white
                        rounded-md ${item.spacing ? "mt-[100%]": "mt-3"} ${item.top ? "mb-10": "mb-0 text-sm"} hover:bg-gray-200
                        rounded-md ${active == item.link ? 'bg-gray-300': ''}
                        `}
                        to={item.link}
                        onClick={() =>{ if (item.logout){
                          setActive(item.link)
                          dispatch(logOut())
                        } else{
                          setActive(item.link)
                        }
                        }}
                    >
                         <span className={`text-gray-700 block float-left ${item.top ? "text-3xl": "text-2xl"}`}>
                      {item.icon}
                    </span>
                    <span className={`text-base text-gray-500 font-medium flex-1 ${item.top && "text-lg"}`}
                    >
                      {item.title}
                    </span>


                    </Link>
                   
              </li>
                </>
              ))}
            </ul>
          </div>

            <div className="flex-1 p-4 mt-20 items-center justify-center overflow-y-scroll custom-scrollbar">
              
             
              {children}
            </div>

          
          
          
          <div className="w-1/5 bg-slate-100 p-4  mt-20">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-lg">Top Picks For You</h2>
            </div>
            <div className="flex flex-col">
              {isLoading ? (<div><h1>loading...</h1></div>): recommendations.length === 0? (<div><h2 className="text-xl font-lg">No Items</h2></div>) :
              (recommendations.map((item, index) => (<div className="mt-3">
                <div key={index} className="flex flex-row mb-5 h-[60px]">
                <div className="h-[100%] rounded-lg w-[100px] mr-2">
                  <img src={`http://localhost:8000${item.item_photo}`}  className="rounded-lg w-full h-full"/>
                </div>
                <div >
                  <p className='text-md font-base '>{item.item_name}</p>
                  <p className='text-lg font-base font-semibold'>₦{item.item_price}</p>
                </div>
                </div>
                
              </div>))
              )}
            </div>
          </div>

        </div>
        
  
  )
}

export default Layout
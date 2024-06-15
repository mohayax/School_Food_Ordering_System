import Header from "./Header"
import { BsPerson, BsShop  } from "react-icons/bs";
import { AiOutlineLogout} from "react-icons/ai";
import { RiFolderHistoryFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa"
import logo from '../assets/bu-lg.png'
import { useNavigate } from "react-router-dom";

const Layout = ({children}) => {
  const Menus = [
    { title: "Baze Food Mart", icon: <BsShop/>, top: true, link: '/customer-view' },
    { title: "My Profile", icon: <BsPerson/>, link: '/customer-view/profile' },
    { title: "Order History", icon: <RiFolderHistoryFill/>, link: '/customer-view/order-history' },
    { title: "My Cart", icon: <FaShoppingCart/>, link: '/customer-view/cart'},
    { title: "Logout", icon: <AiOutlineLogout/>, spacing: true },
  ];
  
  const navigate = useNavigate()


  return (
    
        
        <div className="flex h-screen">
        <Header/>
          <div className="w-1/5 bg-slate-100 p-4  mt-20 pl-8">
            
            <ul className="pt-2">

              {Menus.map((item,index) => (

                <>
                  <li key={index}
                  className={`text-gray-300  flex items-center
                  gap-x-4 cursor-pointer p-2 hover:bg-light-white
                  rounded-md ${item.spacing ? "mt-[100%]": "mt-3"} ${item.top ? "mb-10": "mb-0 text-sm"}
                  `}
                  onClick={() => navigate(item.link)}
                  >
                    <span className={`text-gray-700 block float-left ${item.top ? "text-3xl": "text-2xl"}`}>
                  {item.icon}
                </span>
                <span className={`text-base text-gray-500 font-medium flex-1 ${item.top && "text-lg"}`}
                >
                  {item.title}
                </span>
              </li>
                </>
              ))}
            </ul>
          </div>

            <div className="flex-1 p-4 mt-20 items-center justify-center overflow-y-scroll">
              
             
              {children}
            </div>

          
          
          
          <div className="w-1/5 bg-slate-100 p-4  mt-20">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-lg">Top Picks For You</h2>
            </div>
          </div>

        </div>
        
  
  )
}

export default Layout
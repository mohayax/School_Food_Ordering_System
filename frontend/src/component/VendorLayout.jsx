import React from 'react'
import VendorHeader from './Vendor-Header'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '@/store/auth/loginSlice';
import { BsPerson, BsShop  } from "react-icons/bs";
import { AiOutlineLogout} from "react-icons/ai";
import { RiFolderHistoryFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa"
import { CiCircleList } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { CiShoppingTag } from "react-icons/ci";
import { useDispatch } from 'react-redux';

const VendorLayout = ({children}) => {
    const Menus = [
        { title: "Dashboard", icon: <RxDashboard/>, top: true, link: '/vendor-view' },
        { title: "My Profile", icon: <BsShop/>, link: '/vendor-view/profile' },
        { title: "Menu Items", icon: <CiShoppingTag/>, link: '/vendor-view/menu-items' },
        { title: "Orders", icon: <CiCircleList/>, link: '/vendor-view/orders'},
        { title: "Logout", icon: <AiOutlineLogout/>, spacing: true, logout: true },
      ];

    const [active, setActive] = useState('/vendor-view')
    const dispatch = useDispatch()
  return (
    <div className="flex h-screen">
        <VendorHeader/>

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

          <div className='flex-1 p-4 mt-20 items-center justify-center overflow-y-scroll custom-scrollbar'>
            {children}
          </div>
    </div>
  )
}

export default VendorLayout
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import ConfirmAlert from '@/component/ConfirmAlert'


import { BsFilter } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { FaSearch } from "react-icons/fa"
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import MenuItemAction from '@/component/MenuItemAction'
import AddMenuItem from '@/component/AddMenuItem'

const MenuItems = () => {

  const items = [
    {
      name: "Margherita Pizza",
      description: "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      price: 12.99,
      category: "Food",
      availabilityStatus: true
    },
    {
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
      price: 8.99,
      category: "Food",
      availabilityStatus: true
    },
    {
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
      price: 15.99,
      category: "Food",
      availabilityStatus: false
    },
    {
      name: "Vegetable Stir-fry",
      description: "Mixed vegetables stir-fried in a savory sauce, served with steamed rice.",
      price: 10.99,
      category: "Food",
      availabilityStatus: true
    },
    {
      name: "Chocolate Lava Cake",
      description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
      price: 6.99,
      category: "Dessert",
      availabilityStatus: true
    },
    {
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with creamy sauce, pancetta, and Parmesan cheese.",
      price: 11.99,
      category: "Food",
      availabilityStatus: true
    },
    {
      name: "Beef Tacos",
      description: "Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
      price: 9.99,
      category: "Food",
      availabilityStatus: true
    },
    {
      name: "Chicken Parmesan",
      description: "Breaded chicken breast topped with marinara sauce and melted mozzarella.",
      price: 13.99,
      category: "Food",
      availabilityStatus: false
    },
    {
      name: "Mango Smoothie",
      description: "Refreshing smoothie made with ripe mangoes, yogurt, and a hint of honey.",
      price: 5.99,
      category: "Drinks",
      availabilityStatus: true
    },
    {
      name: "Iced Coffee",
      description: "Chilled coffee served over ice, with optional milk and sweetener.",
      price: 3.99,
      category: "Drinks",
      availabilityStatus: true
    }
  ];



  return (
    <>
      <div className='w-[90%] ml-auto mr-auto'>
      <h1 className='text-2xl font-base text-gray-700 mt-3 '>Inventory</h1>
       
       <div className='flex justify-between w-[100%] mt-10'>
          <div className='inline-flex items-center justify-center h-8 w-64 '>
            <input type="text" placeholder='Search...' className='border-2  border-gray-500 px-2 text-sm text-gray-600 font-base outline-none h-full w-[80%] border-r-none'/>
            <button className='px-3 text-md  text-gray-500 border-2 border-l-0 border-gray-500 text-lg w-[20%] h-full text-center hover:bg-slate-100'><FaSearch/></button>
          </div>

          <div>
            <AddMenuItem triggerStyle='text-md text-gray-700 border-2 border-gray-500 py-1 px-8 hover:bg-slate-100 inline-flex items-center gap-2' triggerText='Add Item'/>
          </div>
       </div>

       <div className="mt-2">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className='border-2 border-gray-500 bg-slate-100'>
              <TableRow>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Item Name</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Item Description</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Item Price</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Item Category</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Availability Status</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-[2px] border-gray-500'>
             
                { items.map(item =>  <TableRow className='border-[1px] border-gray-500'>
                  <TableCell className=" border-e-[1px] border-gray-500 font-semibold text-sm">{item.name}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{item.description}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">₦{item.price}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{item.category}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{item.availabilityStatus}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 text-center text-xl">
                <Popover>
                  <PopoverTrigger><button><MdOutlineModeEdit/></button></PopoverTrigger>
                  <PopoverContent className='flex flex-col gap-2 w-32'>
      
                    <MenuItemAction triggerStyle='text-sm bg-slate-300 rounded-lg px-2 py-1 text-gray-600' triggerText='Edit Item' btnText='Save'/>
                    <ConfirmAlert triggerStyle='text-sm bg-slate-300 rounded-lg px-2 py-1 text-gray-600' triggerText='Delete Item' title='Are you sure you want to delete this item?' btnText='Delete Item'/>
                  </PopoverContent>
                </Popover>
                </TableCell>
                  
                  
                   </TableRow> )  }
             
            </TableBody>
        </Table>
       </div>

       <div className='flex items-center justify-center gap-16 mt-10 mb-20'>
        <button
          onClick=''
          disabled=''
         className={`font-semibold text-xl text-gray-600 inline-flex items-center `}><GrPrevious className='text-2xl'/>Prev</button>
        <button 
        onClick=''
        disabled=''
        className={`font-semibold text-xl text-gray-600 inline-flex items-center `}>Next<GrNext className='text-2xl'/></button>
      </div>
      </div>
    </>
  )
}

export default MenuItems
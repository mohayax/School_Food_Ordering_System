import React, { useState, useEffect } from 'react'
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
import { getVendorItems, delete_menu_item } from '@/store/menu-items/menuItems-thunks';
import { useSelector, useDispatch } from 'react-redux';

const MenuItems = () => {
  const {items_loading, vendor_items} = useSelector(state => state.menuItem)
  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  useEffect(() => {
    setFilteredItems(
      vendor_items.filter((item) =>
        item.item_name ? item.item_name.toLowerCase().includes(searchQuery.toLowerCase()): false
      )
    );
  }, [vendor_items, searchQuery]);

  

  useEffect(()=>{
    dispatch(getVendorItems())
  },[dispatch])
 
  return (
    <>
      <div className='w-[90%] ml-auto mr-auto'>
      <h1 className='text-2xl font-base text-gray-700 mt-3 '>Inventory</h1>
       
       <div className='flex justify-between w-[100%] mt-10'>
          <div className='inline-flex items-center justify-center h-8 w-64 '>
            <input type="text" placeholder='Search...' className='border-2  border-gray-500 px-2 text-sm text-gray-600 font-base outline-none h-full w-[80%] border-r-none'
              value={searchQuery}
              onChange={handleSearch}
            />
            <button disabled className='px-3 text-md  text-gray-500 border-2 border-l-0 border-gray-500 text-lg w-[20%] h-full text-center hover:bg-slate-100'><FaSearch/></button>
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
             
                {items_loading  ? (<TableRow>
                  <TableCell colSpan={7} rowSpan={7} className="text-center">
                    Retrieving Items...
                  </TableCell>
                </TableRow>) : 
                filteredItems.length === 0? (<TableRow>
                  <TableCell colSpan={7} rowSpan={7} className="text-center">
                    No Items
                  </TableCell>
                </TableRow>):  ( filteredItems.map((item, index) =>  <TableRow className='border-[1px] border-gray-500' key={index}>
                <TableCell className=" border-e-[1px] border-gray-500 font-semibold text-sm">{item.item_name}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{item.item_description}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">₦ {item.item_price}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{item.item_category}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{item.availability_status}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 text-center text-xl">
                <Popover>
                  <PopoverTrigger><button><MdOutlineModeEdit/></button></PopoverTrigger>
                  <PopoverContent className='flex flex-col gap-2 w-32'>
      
                    <MenuItemAction triggerStyle='text-sm bg-slate-300 rounded-lg px-2 py-1 text-gray-600' triggerText='Edit Item' btnText='Save' 
                    defaultValues= {{
                      item_name: item.item_name,
                      item_photo: '',
                      item_price: item.item_price,
                      item_category: item.item_category,
                      availability_status: item.availability_status,
                      item_description: item.item_description
                    }}
                    itemID={item.id}
                    itemPhoto={item.item_photo} 
                    />
                    
                    <ConfirmAlert 
                      triggerStyle='text-sm bg-slate-300 rounded-lg px-2 py-1 text-gray-600' 
                      triggerText='Delete Item' 
                      title='Are you sure you want to delete this item?' 
                      btnText='Delete Item' 
                      onClick={() => dispatch(delete_menu_item(item.id))}
                    />

                  </PopoverContent>
                </Popover>
                </TableCell>
              </TableRow> )) }
             
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
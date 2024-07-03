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


import { BsFilter } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { FaSearch } from "react-icons/fa"

const MenuItems = () => {
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
            <button className='text-md text-gray-700 border-2 border-gray-500 py-1 px-8 hover:bg-slate-100 inline-flex items-center gap-2'>Add Item</button>
          </div>
       </div>

       <div className="mt-2">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow className='border-2 border-gray-500 bg-slate-100' >
                <TableHead className='border-e-2 border-gray-500'>Item Name</TableHead>
                <TableHead className='border-e-2 border-gray-500'>Item Description</TableHead>
                <TableHead className='border-e-2 border-gray-500'>Item Price</TableHead>
                <TableHead className='border-e-2 border-gray-500'>Item Category</TableHead>
                <TableHead className='border-e-2 border-gray-500'>Availability Status</TableHead>
                <TableHead className='border-e-2 border-gray-500'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
        </Table>
       </div>
      </div>
    </>
  )
}

export default MenuItems
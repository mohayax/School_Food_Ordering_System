import React, { useState } from 'react'
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
import OrderAction from '@/component/OrderAction'

import { BsFilter } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { FaSearch } from "react-icons/fa"
import { GrPrevious } from "react-icons/gr";

const Orders = () => {
  const orders = [
    {
      id: '1',
      customer_name: 'John Doe',
      order_items: [
        { item_name: 'Chicken Parmesan', item_quantity: 1, item_price: 13.99 },
        { item_name: 'Mango Smoothie', item_quantity: 2, item_price: 5.99 }
      ],
      order_date: '2024-06-01',
      order_status: 'Completed',
      total_amount: '$120.00'
    },
    {
      id: '2',
      customer_name: 'Jane Smith',
      order_items: [
        { item_name: 'Chicken Parmesan', item_quantity: 1, item_price: 13.99 },
        { item_name: 'Mango Smoothie', item_quantity: 2, item_price: 5.99 }
      ],
      order_date: '2024-06-05',
      order_status: 'Pending',
      total_amount: '$85.50'
    },
    {
      id: '3',
      customer_name: 'Michael Johnson',
      order_items: [
        { item_name: 'Chicken Parmesan', item_quantity: 1, item_price: 13.99 },
        { item_name: 'Mango Smoothie', item_quantity: 2, item_price: 5.99 }
      ],
      order_date: '2024-06-10',
      order_status: 'Pending',
      total_amount: '$45.75'
    },
    {
      id: '4',
      customer_name: 'Emily Davis',
      order_items: [
        { item_name: 'Chicken Parmesan', item_quantity: 1, item_price: 13.99 },
        { item_name: 'Mango Smoothie', item_quantity: 2, item_price: 5.99 }
      ],
      order_date: '2024-06-15',
      order_status: 'Cancelled',
      total_amount: '$200.00'
    },
    {
      id: '5',
      customer_name: 'David Brown',
      order_items: [
        { item_name: 'Chicken Parmesan', item_quantity: 1, item_price: 13.99 },
        { item_name: 'Mango Smoothie', item_quantity: 2, item_price: 5.99 }
      ],
      order_date: '2024-06-20',
      order_status: 'Successful',
      total_amount: '$65.30'
    }
  ];
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState(orders);
  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredItems(
      orders.filter((order) =>
        order.id == query
      )
    );
    if (query == ""){
      setFilteredItems(orders)
    }
  };
  return (
    <>
    <div className='w-[90%] ml-auto mr-auto'>
      <h1 className='text-2xl font-base text-gray-700 mt-3 '>Inventory</h1>
       
       <div className='flex  w-[100%] mt-10  ml-auto mr-auto justify-end mb-10'>
          <div className='inline-flex items-center justify-center h-8 w-64 '>
            <input type="text" placeholder='Search...' className='border-2  border-gray-500 px-2 text-sm text-gray-600 font-base outline-none h-full w-[80%] border-r-none'
              value={searchQuery}
              onChange={handleSearch}
            />
            <button disabled className='px-3 text-md  text-gray-500 border-2 border-l-0 border-gray-500 text-lg w-[20%] h-full text-center hover:bg-slate-100'><FaSearch/></button>
          </div>

      
       </div>

       <div className="mt-2">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className='border-2 border-gray-500 bg-slate-100'>
              <TableRow>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Order Id</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Customer Name</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Order Date</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Order Status</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Order Item(s)</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Total Amount</TableHead>
                <TableHead className='border-e-[1px] border-gray-500 font-semibold text-md text-gray-700'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-[2px] border-gray-500'>
             
                { filteredItems.map(order =>  <TableRow className='border-[1px] border-gray-500'>
                <TableCell className=" border-e-[1px] border-gray-500 font-semibold text-sm">{order.id}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-semibold text-sm">{order.customer_name}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm"> {order.order_date} </TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{order.order_status}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{order.order_items.map(item => item.item_name).join(', ')} </TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 font-base text-sm">{order.total_amount}</TableCell>
                <TableCell className=" border-e-[1px] border-gray-500 text-center text-xl">
                    <OrderAction  triggerText="view" btnText='Save' 
                      defaultValues= {{
                        id: order.id,
                        customer_name: order.customer_name,
                        order_date: order.order_date,
                        order_status: order.order_status,
                        total_amount: order.total_amount,
                        order_items: order.order_items.map(item => item.item_name).join(', ')
                      }}/>
                </TableCell>
              </TableRow> )  }
              
            </TableBody>
        </Table>
       </div>

       {/* <div className='flex items-center justify-center gap-16 mt-10 mb-20'>
        <button
          onClick=''
          disabled=''
         className={`font-semibold text-xl text-gray-600 inline-flex items-center `}><GrPrevious className='text-2xl'/>Prev</button>
        <button 
        onClick=''
        disabled=''
        className={`font-semibold text-xl text-gray-600 inline-flex items-center `}>Next<GrNext className='text-2xl'/></button>
      </div> */}
      </div>
    </>
  )
}

export default Orders
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { get_vendor_orders } from '@/store/order/order-thunks';
import OrderAction from '@/component/OrderAction';

const Orders = () => {
  const { isLoading, vendor_orders } = useSelector(state => state.vendor_order);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_vendor_orders());
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(
      vendor_orders.filter((order) =>
        order.id == searchQuery || searchQuery === ""
      )
    );
  }, [vendor_orders, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className='w-[90%] ml-auto mr-auto'>
        <h1 className='text-2xl font-base text-gray-700 mt-3 '>Orders</h1>

        <div className='flex w-[100%] mt-10 ml-auto mr-auto justify-end mb-10'>
          <div className='inline-flex items-center justify-center h-8 w-64 '>
            <input
              type="text"
              placeholder='Search...'
              className='border-2 border-gray-500 px-2 text-sm text-gray-600 font-base outline-none h-full w-[80%] border-r-none'
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              disabled
              className='px-3 text-md text-gray-500 border-2 border-l-0 border-gray-500 text-lg w-[20%] h-full text-center hover:bg-slate-100'>
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="mt-2">
          <Table>
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
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    Retrieving orders...
                  </TableCell>
                </TableRow>
              ) : !filteredItems || filteredItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No Orders...
                  </TableCell>
                </TableRow>
              ) : (
                filteredItems.map((order, index) => {
                  const orderDate = new Date(order.order_date).toLocaleDateString();
                  
                  return (
                    <TableRow className='border-[1px] border-gray-500' key={index}>
                      <TableCell className="border-e-[1px] border-gray-500 font-semibold text-sm">{order.id}</TableCell>
                      <TableCell className="border-e-[1px] border-gray-500 font-semibold text-sm">{order.customer_name}</TableCell>
                      <TableCell className="border-e-[1px] border-gray-500 font-base text-sm">{orderDate}</TableCell>
                      <TableCell className="border-e-[1px] border-gray-500 font-base text-sm">{order.order_status}</TableCell>
                      <TableCell className="border-e-[1px] border-gray-500 font-base text-sm">{order.order_items.map(item => item.item_name).join(', ')}</TableCell>
                      <TableCell className="border-e-[1px] border-gray-500 font-base text-sm">{order.total_amount}</TableCell>
                      <TableCell className="border-e-[1px] border-gray-500 text-center text-xl">
                        <OrderAction
                          triggerText="view"
                          btnText='Save'
                          defaultValues={{
                            id: order.id,
                            customer_name: order.customer_name,
                            order_date: order.order_date,
                            order_status: order.order_status,
                            total_amount: order.total_amount,
                            order_items: order.order_items.map(item => item.item_name).join(', ')
                          }}
                          orderID={order.id}
                          customer={order.customer}
                          orderItems={order.order_items}
                          orderStatus={order.order_status}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Orders;

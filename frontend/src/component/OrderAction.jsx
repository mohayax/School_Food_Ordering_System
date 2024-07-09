import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { orderSchema } from "../utils/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import Formfield from '@/utils/reusable-components/Formfield'
  import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
 import { update_order } from '@/store/order/order-thunks'
import { Button } from '@/components/ui/button'

const OrderAction = ({
    defaultValues,
    triggerStyle, 
    triggerText,
    orderID 
}) => {
    const form = useForm(
        {
        resolver: zodResolver(orderSchema),
        defaultValues: {
            id: '',
            customer_name: '',
            order_items: '',
            order_date: '',
            order_status: '',
            total_amount: '',
        }
      }
    )
    const dispatch = useDispatch()
    const [id, setOrderID] = useState(null)

    useEffect(() => {
      form.reset(defaultValues)
    },[defaultValues])

    const onSubmit = (values) => {
      console.log(values)
      if (id !==null){
        dispatch(update_order(id, values))
      }
    }

  return (
    <>
        <AlertDialog>
            <AlertDialogTrigger  className={triggerStyle}>{triggerText}</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Order Details</AlertDialogTitle>
              <AlertDialogDescription>
                    Update Order status
              </AlertDialogDescription>
                <div className='flex gap-10 w-[90%] mr-auto ml-auto'>
                <Form {...form}>
                    
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                      <div className='flex flex-col gap-2 mb-6 '>
                        <div className='flex gap-4'>
                          <Formfield
                            disabled
                            required='required'
                            name="id"
                            control={form.control}
                            type="text"
                            label="Order ID"
                            className='w-[20%]'
                          />
                          

                        <Formfield
                            disabled
                            name="order_date"
                            control={form.control}
                            type="date"
                            label="Order Date"
                            placeholder="2333"
                             className='w-[30%]'
                          />  

                        <Formfield
                            disabled
                            name="customer_name"
                            control={form.control}
                            type="text"
                            label="Customer Name"
                            className='w-[50%]'
                          />

                        </div>

                        <div className='flex gap-2'>


                        <Formfield
                            disabled
                            name="order_items"
                            label="Order Items"
                            control={form.control}
                            className='w-[100%]'
                          />  
                           


                        </div>
                        <div className='flex gap-2'>

                       
                        <Controller
                            control={form.control}
                            name="order_status"
                            render={({ field }) => (
                              <FormItem required
                              className='w-[50%]'
                              >
                                <FormLabel>Order Status</FormLabel>
                                <FormControl>
                                  <Select  onValueChange={field.onChange} value={field.value} required>
                                    <SelectTrigger>
                                      <SelectValue  className='text-[#ADADAD]' >{field.value}</SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Pending">Pending</SelectItem>
                                      <SelectItem value="Completed">Completed</SelectItem>
                                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                        <Formfield
                            disabled
                            name="total_amount"
                            control={form.control}
                            type="text"
                            label="Total Amount"
                            className='w-[50%]'
                          />
                        </div>
                 
                      </div>

                      <AlertDialogFooter>
                      <AlertDialogCancel >Cancel</AlertDialogCancel>
                      {!form.formState.isValid ? ( <Button type="submit" > Update </Button> ) :
                       (<AlertDialogAction onClick={() => setOrderID(orderID)} type="submit" >  Update </AlertDialogAction> )}
                    </AlertDialogFooter>
                    </form>

                    
                    
                  </Form>  
                    </div>
            </AlertDialogContent>
        </AlertDialog>
    </>
  )
}

export default OrderAction
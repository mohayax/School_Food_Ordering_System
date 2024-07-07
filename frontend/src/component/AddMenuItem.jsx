import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { Signup_Schema } from "../utils/form-schema"
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
  import { Textarea } from '@/components/ui/textarea'
  import { Button } from '@/components/ui/button'
  import { Menu_Item_Schema } from '../utils/form-schema'
  import displayImg from '../assets/displayImg.jpg'
  import { create_menu_item } from '@/store/menu-items/menuItems-thunks'

const AddMenuItem = ({triggerStyle, triggerText}) => {
  const dispatch = useDispatch()

    const form = useForm(
        {
          resolver: zodResolver(Menu_Item_Schema),
        }
      )

    const onSubmit = (values) => {
        dispatch(create_menu_item(values))
        console.log(values)
    }
  return (
    <>
     <AlertDialog >
            <AlertDialogTrigger className={triggerStyle}>{triggerText}</AlertDialogTrigger>
            <AlertDialogContent className=' bg-slate-100'>
                <AlertDialogHeader >
                  <AlertDialogTitle>New Item</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription></AlertDialogDescription>
                <Form {...form}>
                <div className='flex flex-col gap-4 w-[90%] mr-auto ml-auto'>
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                      <div className='flex flex-col gap-2 mb-6 '>
                        <div className='flex gap-4'>
                          <Formfield
                            name="item_name"
                            control={form.control}
                            type="text"
                            label="Item Name"
                            placeholder="enter item name"
                            className='w-[50%]'
                          />
                          

                          <Formfield
                            name="item_photo"
                            control={form.control}
                            type="file"
                            label="Item Photo"
                             className='w-[50%]'
                          />
                        </div>

                        <div className='flex gap-2'>


                        <Formfield
                            name="item_price"
                            control={form.control}
                            type="text"
                            label="Item Price (₦)"
                            placeholder="2333"
                             className='w-[50%]'
                          />  

                        <Controller
                            control={form.control}
                            name="item_category"
                            render={({ field }) => (
                              <FormItem 
                              className='w-[50%]'
                              >
                                <FormLabel>Item Category</FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value}  required>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Category" className='text-[#ADADAD]' />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="food">Food</SelectItem>
                                      <SelectItem value="drinks">Drinks</SelectItem>
                                      <SelectItem value="snacks">Snacks</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />


                        <Controller
                            control={form.control}
                            name="availability_status"
                            required
                            render={({ field }) => (
                              <FormItem 
                              className='w-[50%]'
                              >
                                <FormLabel>Availability Status</FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value} required >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Status" className='text-[#ADADAD]' />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="available">Available</SelectItem>
                                      <SelectItem value="unavailable">Unavailable</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />


                          

                        </div>

                        <div className='w-full'>
                          <FormField
                            control={form.control}
                            name="item_description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Item Description</FormLabel>
                                <FormControl>
                                  <Textarea
                                    max='4'
                                    value=''
                                    placeholder="item description..."
                                    className="resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                                  />
                          </div>        
                         
                 
                      </div>

                      <AlertDialogFooter>
                      <AlertDialogCancel onClick={() =>form.reset()}>Cancel</AlertDialogCancel>
                      {!form.formState.isValid ? ( <Button type="submit" > Add Item </Button> ) :
                       ( <AlertDialogAction type="submit">  Add Item </AlertDialogAction> )}
                    </AlertDialogFooter>
                    </form>

                    
                    </div>
                  </Form>  
                
                 
            </AlertDialogContent>
        </AlertDialog>
    </>
  )
}

export default AddMenuItem
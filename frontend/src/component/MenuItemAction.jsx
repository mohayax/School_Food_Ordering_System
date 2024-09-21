import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { Menu_Item_Schema } from "../utils/form-schema"
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
  import displayImg from '../assets/displayImg.jpg'
import { Button } from '@/components/ui/button'
import { update_menu_item } from '@/store/menu-items/menuItems-thunks'
import { convertImg } from '@/utils/image-converter'
  const MenuItemAction = ({
    defaultValues,
    triggerStyle, 
    triggerText,
    itemID,
    itemPhoto 
    }) => {
      const imageSrc = `http://localhost:8000${itemPhoto}`;
      const dispatch = useDispatch()
    
      const form = useForm(
        {
        resolver: zodResolver(Menu_Item_Schema),
        defaultValues: {
          item_name: '',
          // item_photo: imageSrc,
          item_price: '',
          item_category: '',
          availability_status: '',
          item_description: ''
        }
      }
    )
    
    
    const handleImgChange = async(img) =>{
      const pic = await convertImg(img)
      return pic
    }

    const convertedImg = handleImgChange(imageSrc)
    console.log("con", convertedImg)
    
    useEffect(() => {
      form.reset(defaultValues)
    },[defaultValues])
    
   const [photo, setPhoto] = useState('')

    const onSubmit = async (values) => {

      const formData = new FormData();
      
      formData.append('item_name', values.item_name);
      formData.append('item_price', values.item_price);
      formData.append('item_category', values.item_category);
      formData.append('availability_status', values.availability_status);
      formData.append('item_description', values.item_description);

      if (photo !== ''){
        formData.append('item_photo', photo);
      } 
  
      dispatch(update_menu_item({ id: itemID, data: formData }));
    };


   
  return (
    <>
          <AlertDialog >
            <AlertDialogTrigger  className={triggerStyle}>{triggerText}</AlertDialogTrigger>
            <AlertDialogContent className='min-w-[60vw] bg-slate-100'>
              <AlertDialogTitle>Item Details</AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
                <div className='flex gap-10 w-[90%] mr-auto ml-auto'>
                <div className='w-[70%]'>
                <Form {...form}>
                    
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                      <div className='flex flex-col gap-2 mb-6 '>
                        <div className='flex gap-4'>
                          <Formfield
                          required='required'
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
                            onChange={({target}) => {
                              const file = target.files[0];
                              const reader = new FileReader()
                              reader.readAsDataURL(file)
                              reader.onloadend = () =>{
                                const result = reader.result
                                setPhoto(result)
                              }
                            }}
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
                              <FormItem required
                              className='w-[50%]'
                              
                              >
                                <FormLabel>Item Category</FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value} required >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Category" className='text-[#ADADAD]' />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Food">Food</SelectItem>
                                      <SelectItem value="Drinks">Drinks</SelectItem>
                                      <SelectItem value="Snacks">Snacks</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                {/* <FormDescription>This is your account type</FormDescription> */}
                                <FormMessage />
                              </FormItem>
                            )}
                          />


                        <Controller
                            control={form.control}
                            name="availability_status"
                            render={({ field }) => (
                              <FormItem required
                              className='w-[50%]'
                              >
                                <FormLabel>Availability Status</FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value}  required>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Status" className='text-[#ADADAD]' />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Available">Available</SelectItem>
                                      <SelectItem value="Unavailable">Unavailable</SelectItem>
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
                              <FormItem
                              required
                              >
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
                      <AlertDialogCancel >Cancel</AlertDialogCancel>
                      {!form.formState.isValid ? ( <Button type="submit" > Update </Button> ) :
                       ( <AlertDialogAction   type="submit">  Update...! </AlertDialogAction> )}
                    </AlertDialogFooter>
                    </form>

                    
                    
                  </Form>  
                    </div>

                    <div className='w-[30%] mt-14 flex flex-col items-center'>
                    <img src={imageSrc} className='h-[60%] w-full rounded-lg'/>
                      <h1 className='font-base mt-5 text-sm text-gray-800'>Item photo in customer view</h1>
                    </div>
                </div>
              
            </AlertDialogContent>
        </AlertDialog>
    </>
  )
}

export default MenuItemAction
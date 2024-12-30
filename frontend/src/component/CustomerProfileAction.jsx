import React from 'react'
import { useForm } from 'react-hook-form'
import Formfield from '@/utils/reusable-components/Formfield'
import { Form } from "@/components/ui/form"
import { Customer_Profile_Update_Schema } from '@/utils/form-schema'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
import { Button } from '@/components/ui/button'
import { getCustomerProfile, updateCustomerProfile } from '@/store/profiles/customer-thunks'

const CustomerProfileAction = ({defaultValues}) => {
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(Customer_Profile_Update_Schema),
        defaultValues: {
            first_name: '',
            last_name: '',
            customer_dob: '',
            phone_number: '',
        }
      })
    const onSubmit = (values) => {
        dispatch(updateCustomerProfile(values)).then(dispatch(getCustomerProfile()))
    }

      useEffect(() => {
        form.reset(defaultValues)
      },[defaultValues])
  return (
    <div>
            <AlertDialog>
            <AlertDialogTrigger className="w-full mt-5 py-2 px-4 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition duration-300">Update Profile </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Vendor Profile</AlertDialogTitle>
            
                <div className='flex gap-10 w-[90%] mr-auto ml-auto'>
                <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[100%]">
            
            <div className="flex justify-between gap-2 mb-3">
              <Formfield
                control={form.control}
                name="first_name"
                type="text"
                label="First Name"
                placeholder="Enter your first name"
                className='w-[50%]'
              />

              <Formfield
                control={form.control}
                name="last_name"
                type="text"
                label="Last Name"
                placeholder="Enter your last name"
                className='w-[50%]'
              />
            </div>
            
            <div className="flex justify-between gap-2">

            <Formfield
              control={form.control}
              name="customer_dob"
              type="date"
              label="Date of birth"
              className='w-[50%]'
            />

            <Formfield
                control={form.control}
                name="phone_number"
                type="text"
                label="Phone Number"
                placeholder="07012345678"
                className='w-[100%]'
                />
            </div>

            <AlertDialogFooter className='mt-5'>
            <AlertDialogCancel >Cancel</AlertDialogCancel>   
            <AlertDialogAction  type="submit">  Update </AlertDialogAction>
            </AlertDialogFooter>
            </form>
            </Form>
                </div>
            </AlertDialogContent>
        </AlertDialog>


    </div>
  )
}

export default CustomerProfileAction
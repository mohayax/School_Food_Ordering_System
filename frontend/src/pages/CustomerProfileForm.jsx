import { useForm } from "react-hook-form"
import Formfield from "@/utils/reusable-components/Formfield"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSelector, useDispatch } from "react-redux"
import { createCustomerProfile } from "@/store/profiles/customer-thunks"
import { Customer_Profile_Schema } from "@/utils/form-schema"
import { Form } from "@/components/ui/form"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from '../assets/bu-lg.png'



const CustomerProfileForm = () => {
    const {isLoading, error, newCustomer} = useSelector((state)=> state.customerProfile)
    
    const form = useForm({
        resolver: zodResolver(Customer_Profile_Schema)
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onSubmit = (values) => {
        dispatch(createCustomerProfile(values))
        
    }

    

    useEffect(() => {
      if (!isLoading && !error && newCustomer){
        navigate('/')
      }
    }, [isLoading, error])
  return (
    <div className="flex flex-col bg-profile bg-cover bg-top h-screen p-4 items-center">
    
    <h1 className="text-2xl font-bold mt-6">Create Your Profile </h1>
    
    <div className="flex flex-col items-center gap-2 w-[40%] ml-auto mr-auto  bg-slate-100 rounded-lg mt-5 px-20 py-10">
      <div className="rounded-full h-20 border-2 border-gray-400">
      <img src={logo} className="h-full rounded-full"/>
      </div>
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
              name="email"
              type="email"
              label="User Account Email"
              placeholder="Re-enter Your Email"
              className='w-[50%]'
            />

            <Formfield
              control={form.control}
              name="customer_dob"
              type="date"
              label="Date of birth"
              className='w-[50%]'
            />
            </div>
            
            <div className="flex justify-between gap-2 mt-3">
            <Formfield
              control={form.control}
              name="phone_number"
              type="text"
              label="Phone Number"
              placeholder="07012345678"
              className='w-[100%]'
            />
          
            {/* <Formfield
              control={form.control}
              name="profile_photo"
              type="file"
              label="Profile Photo"
              className='w-[50%]'
            /> */}
            </div>

            <Button type="submit" className='w-[100%] mt-5 bg-gray-700'>Create Profile</Button>
            </form>
        </Form>
    </div>
    </div>
  )
}

export default CustomerProfileForm
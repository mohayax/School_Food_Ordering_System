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
        navigate('/login')
      }
    }, [isLoading, error])
  return (
    <div className="flex flex-col items-center gap-2">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            

            <Formfield
              control={form.control}
              name="first_name"
              type="text"
              label="First Name"
              placeholder="John"
            />

            <Formfield
              control={form.control}
              name="last_name"
              type="text"
              label="Last Name"
              placeholder="Doe"
            />

            <Formfield
              control={form.control}
              name="email"
              type="email"
              label="User Account Email"
              placeholder="Re-enter Your Email"
            />

            <Formfield
              control={form.control}
              name="customer_dob"
              type="date"
              label="Date of birth"
            />

            <Formfield
              control={form.control}
              name="phone_number"
              type="text"
              label="Phone Number"
              placeholder="07012345678"
            />
{/* 
            <Formfield
              control={form.control}
              name="profile_photo"
              type="file"
              label="Profile Photo"
            /> */}

            <Button type="submit">Create Profile</Button>
            </form>
        </Form>
    </div>
  )
}

export default CustomerProfileForm
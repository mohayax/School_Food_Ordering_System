import { toast } from "react-toastify"
import { useForm, Controller } from "react-hook-form"
import { Signup_Schema } from "../utils/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { register } from "@/store/auth/registerSlice"
import { useSelector, useDispatch } from "react-redux"
import sigUpPic from '../assets/sign-up-form.svg'
import Formfield from "@/utils/reusable-components/Formfield"
import Selectfield from "@/utils/reusable-components/Selectfield"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"



const Signup = () => {
  const dispatch = useDispatch();
  
  const {isLoading, account, error} = useSelector((state) => state.register)
  const [role, setRole] = useState("")

  const form = useForm({
    resolver: zodResolver(Signup_Schema),
    defaultValues: {
      email: "",
      role: "",
      password: "",
      password2: ""
    }
  })

  const navigate = useNavigate()
  
  const onSubmit = (values) => {
    setRole(values.role)
    dispatch(register(values))
    // form.reset()
  }

  useEffect(() => {
    if (!isLoading && !error && account) {
      if (role === 'vendor') {
        navigate('/create-vendor-profile');
      } else if (role === 'customer') {
        navigate('/create-customer-profile');
      }
    }
  }, [account, isLoading, error]); 

  

  return (
    <div className="flex">
      
      <div className="w-[50%] bg-login bg-cover h-screen">
        <h1 className="text-4xl z-50 font-semibold justify-center text-center mt-[15%] text-gray-900">Baze Food Mart</h1>
      {/* <img src={sigUpPic} className="w-[100%]"/> */}
      </div>
      
      <div className="w-[50%] bg-slate-100" >
     
      <div className=" z-30 flex flex-col w-[60%] ml-auto mr-auto justify-center items-center mt-20 mb-auto px-10 py-5 shadow-lg rounded-lg">
      <h1 className="text-xl font-bold">Sign Up</h1>
      <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
           <Formfield 
              name="email"
              control={form.control}
              type="email"
              label="Email"
              placeholder="johndoe@email.com"
              // className='mb-3'
              />

            <Controller
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem required>
                <FormLabel>Account Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Role" className='text-[#ADADAD]' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vendor">vendor</SelectItem>
                      <SelectItem value="customer">customer</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>This is your account type</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


            <Formfield 
              name="password"
              control={form.control}
              type="password"
              label="Password"
              placeholder="Enter password"
              // className='mt-3'
              />

            <Formfield 
              name="password2"
              control={form.control}
              type="password"
              label="Confirm Password"
              placeholder="Confirm password"
              // className='mt-3'
              />
           <Button type="submit" disabled={isLoading} className='w-[100%] mt-3'>{isLoading ? "loading..." : "Submit"}</Button>
          </form>
      </Form>
      <div className='flex items-center mt-4 gap-4'>
        <p className="text-sm">Already have an account?</p>
        <Link to='/' className="text-sm text-blue-900">Login</Link>
      </div>
      </div>
  
      </div>
    </div>
    
  )
}

export default Signup
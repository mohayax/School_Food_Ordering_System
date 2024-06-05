import { toast } from "react-toastify"
import { useForm, Controller } from "react-hook-form"
import { Signup_Schema } from "../utils/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { register } from "@/store/auth/registerSlice"
import { useSelector, useDispatch } from "react-redux"

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
    <div className="flex flex-col items-center gap-2">
      <h1>Sign Up</h1>
        

      <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)}>
           <Formfield 
              name="email"
              control={form.control}
              type="email"
              description="email--field"
              label="Email"
              />

            <Controller
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[#ADADAD]'>Role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value} required>
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
              />

            <Formfield 
              name="password2"
              control={form.control}
              type="password"
              label="Confirm Password"
              />
           <Button type="submit" disabled={isLoading}>{isLoading ? "loading..." : "Submit"}</Button>
          </form>
      </Form>
      <Link to='/login'>Login</Link>
    </div>
    
  )
}

export default Signup
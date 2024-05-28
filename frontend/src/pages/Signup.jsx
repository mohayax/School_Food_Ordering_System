import { toast } from "react-toastify"
import { useForm, Controller } from "react-hook-form"
import { Signup_Schema } from "../utils/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { register } from "@/store/registerSlice"
import { useSelector, useDispatch } from "react-redux"

import Formfield from "@/utils/reusable-components/Formfield"
import Selectfield from "@/utils/reusable-components/Selectfield"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"


import { Button } from "@/components/ui/button"



const Signup = () => {
  const dispatch = useDispatch();
  


  const form = useForm({
    resolver: zodResolver(Signup_Schema),
    defaultValues: {
      email: "",
      role: "",
      password: "",
      password2: ""
    }
  })


  const onSubmit = async (values) => {
    console.log('values', values)
    dispatch(register(values))
    
    form.reset()
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Sign Up</h1>
        

      <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)}>
           <>

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
              />

            <Formfield 
              name="password2"
              control={form.control}
              type="password"
              label="Confirm Password"
              />

            {/* <FormField 
                  control={form.control} 
                  name="email"
                  render={({field}) => (
                    <FormItem >
                      <FormLabel className='text-[#ADADAD]'>Email</FormLabel>
                      <FormControl>
                        <Input type='email' placeholder="johndoe@email.com" {...field}/>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
              /> */}
            
            
          
            
            {/* <FormField 
              control={form.control} 
              name="password"
              render={({field}) => (
                <FormItem >
                  <FormLabel className='text-[#ADADAD]'>Password</FormLabel>
                  <FormControl>
                    <Input type='password' {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
            )}
          /> */}
{/*           
              <FormField 
                control={form.control} 
                name="password2"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className='text-[#ADADAD]'>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type='password' {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
              )}
            />
            */}
           
           </>
           <Button type="submit">Submit</Button>
          </form>
      </Form>
    </div>
    
  )
}

export default Signup
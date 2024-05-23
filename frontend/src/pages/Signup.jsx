import { toast } from "react-toastify"
import { FormProvider, useForm } from "react-hook-form"
import { Signup_Schema } from "../utils/form-schema"
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Signup = () => {
  const form = useForm({
    resolver: zodResolver(Signup_Schema),
    defaultValues:{
      email: "",
      role: "",
      password: "",
      password2: "",
    }
  })

  const onSubmit = (values) => {
    
    // toast.success('success')
    console.log("done")
    console.log("values", values);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Sign Up</h1>

      {/* <FormProvider {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)}>
           <>
           <FormField 
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
            />
            
            
            <Select>
              <SelectTrigger >
                <SelectValue placeholder="Select Role" className='text-[#ADADAD]'/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vendor">vendor</SelectItem>
                <SelectItem value="customer">customer</SelectItem>
              </SelectContent>
            </Select>

            

            
              <FormField 
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
            />
            
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
           
           
           </>
           <Button type="submit">Submit</Button>
          </form>
      </FormProvider> */}
      <Form {...form}>
      <form onSubmit={form.handleSubmit((values) => {console.log('values', values)})} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    
  )
}

export default Signup
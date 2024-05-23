import { toast } from "react-toastify"
import { useForm, Controller } from "react-hook-form"
import { Signup_Schema } from "../utils/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Signup = () => {
  const form = useForm({
    resolver: zodResolver(Signup_Schema),
    defaultValues: {
      email: "",
      role: "",
      password: "",
      password2: ""
    }
  })

  const onSubmit = (values) => {
    toast.success('done')
    console.log("values:", values)
    form.reset()
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Sign Up</h1>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')}/>
        <input type="submit"/>
      </form> */}

      <Form {...form}>
          
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
      </Form>
    </div>
    
  )
}

export default Signup
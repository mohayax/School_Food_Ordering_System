import { useForm } from "react-hook-form"
import Formfield from "@/utils/reusable-components/Formfield"
import { Form } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSelector, useDispatch } from "react-redux"
import { createCustomerProfile } from "@/store/profiles/customer-thunks"
import { Customer_Profile_Schema } from "@/utils/form-schema"



const CustomerProfileForm = () => {
    const {email} = useSelector((state)=> state.register)
    
    const form = useForm({
        resolver: zodResolver(Customer_Profile_Schema)
    })

    const dispatch = useDispatch()
    
    const onSubmit = (values) => {
        dispatch(createCustomerProfile(values))
    }
  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <Formfield
              control={form.control}
              name="email"
              type="email"
              label="User Account Email"
              value={`${email}`}
            />
            </form>
        </Form>
    </div>
  )
}

export default CustomerProfileForm
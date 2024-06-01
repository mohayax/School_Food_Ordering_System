import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import Formfield from "@/utils/reusable-components/Formfield"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Vendor_Profile_Schema } from "@/utils/form-schema"

const VendorProfileForm = () => {
  const {email} = useSelector((state)=> state.register)
  const form = useForm({
    resolver: zodResolver(Vendor_Profile_Schema),
    defaultValues:{
      email: email
    }
  })

  const dispatch = useDispatch()
  const onSubmit = (values) => {

  }
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Vendor Profile Form</h1>
      <Form  {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          <Formfield
              control={form.control}
              name="email"
              type="email"
              label="User Account Email"
            />
            <Formfield
              control={form.control}
              name="vendor_name"
              placeholder="Example catering Services Ltd."
              type="text"
              label="Vendor Name"
            />

            <Formfield
              control={form.control}
              name="vendor_logo"
              type="file"
              label="Logo"
            />

            <Formfield
              control={form.control}
              name="vendor_address"
              placeholder="Example catering Services Ltd."
              type="text"
              label="Address"
            />

            <Formfield
              control={form.control}
              name="vendor_contact_number"
              placeholder="Example catering Services Ltd."
              type="text"
              label="Contact Number"
            />

            <div>
              <Label htmlFor="description">Vendor Information</Label>
              <Textarea placeholder="enter your descripton/information..." id="description" name="vendor_description"/>
            </div>

            <Button type="submit">Create Vendor Profile</Button>
          </form>
      </Form>
    </div>
  )
}

export default VendorProfileForm
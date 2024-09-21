import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import Formfield from "@/utils/reusable-components/Formfield"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Vendor_Profile_Schema } from "@/utils/form-schema"
import { createVendorProfile } from "@/store/profiles/vendor-thunks"
import { useState } from "react"
import logoo from '../assets/bu-lg.png'
import { useNavigate } from "react-router-dom"

const VendorProfileForm = () => {
  const {newVendor, vendorLoading, vendorError} = useSelector(state => state.vendorProfile)
  const form = useForm({
    resolver: zodResolver(Vendor_Profile_Schema)
  })
  const [logo, setLogo] = useState('')
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const onSubmit = (values) => {
    dispatch(createVendorProfile({...values, vendor_logo: logo}))
  }

  useEffect(() => {
    if (!vendorLoading && !vendorError && newVendor){
      navigate('/')
    }
  }, [vendorLoading, vendorError])
  return (
    <>
    {/* flex flex-col bg-profile bg-cover bg-top h-screen p-4 items-center */}
    <div className="flex flex-col h-screen p-4 items-center">
      <h1 className="text-2xl font-bold mt-6">Create Your Profile </h1>
      <div className="flex flex-col items-center gap-2 w-[60%] ml-auto mr-auto  bg-slate-100 rounded-lg mt-5 px-20 py-10">
      <div className="rounded-full h-20 border-2 border-gray-400">
      <img src={logoo} className="h-full rounded-full"/>
      </div>
      <Form  {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between gap-2 mb-3">
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
              onChange={({target}) => {
                const file = target.files[0];
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onloadend = () =>{
                  const result = reader.result
                  setLogo(result)
                }
              }}
              className='w-[40%]'
              label="Logo"
            />

            <Formfield
              control={form.control}
              name="email"
              type="email"
              placeholder="re-enter account email"
              label="User Account Email"
            />
          </div>
          
          <div className="flex justify-between gap-2 mb-3">
            <Formfield
              control={form.control}
              name="vendor_address"
              placeholder="enter your address"
              type="text"
              label="Address"
            />

            <Formfield
              control={form.control}
              name="vendor_openining_hours"
              placeholder="eg mon-fri: 8am-9pm"
              type="text"
              label="Opening Hours"
              className="w-[40%]"
            />

            <Formfield
              control={form.control}
              name="vendor_contact_number"
              placeholder="08012365432"
              type="text"
              label="Contact Number"
            />

          </div>
            
            <div>
            <Label htmlFor="description">Vendor Information</Label>
            <Textarea 
            placeholder="enter your descripton/information..." 
            id="description" 
            {...form.register("vendor_description")}
            />
            </div>
            <Button type="submit" className='w-[100%] mt-5 bg-gray-700'>Create Vendor Profile</Button>
          </form>
      </Form>
      </div>
    </div>
  </>)
}

export default VendorProfileForm
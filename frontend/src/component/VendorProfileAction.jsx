import React from 'react'
import { useForm } from 'react-hook-form'
import Formfield from '@/utils/reusable-components/Formfield'
import { Form } from "@/components/ui/form"
import { Vendor_Profile_Update_Schema } from '@/utils/form-schema'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { getVendorProfile, updateVendorProfile } from '@/store/profiles/vendor-thunks'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'

const VendorProfileAction = ({
    defaultValues, 
    triggerStyle, 
    triggerText,
}) => {
    const dispatch = useDispatch()
    const [logo, setLogo] = useState('')
    const form = useForm({
        resolver: zodResolver(Vendor_Profile_Update_Schema),
        defaultValues: {
            vendor_name: '',
            vendor_address: '',
            vendor_logo: '',
            vendor_contact_number: '',
            vendor_openining_hours: '',
            vendor_description: '',
        }
      })


      const onSubmit = (values) => {
            if (logo !==''){
                dispatch(updateVendorProfile({...values, vendor_logo: logo})).then(dispatch(getVendorProfile()))
            }else{
                dispatch(updateVendorProfile(values)).then(dispatch(getVendorProfile()))
            }
      }

      useEffect(() => {
        form.reset(defaultValues)
      },[defaultValues])

  return (
    <>
        <AlertDialog>
            <AlertDialogTrigger  className={triggerStyle}>{triggerText}</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Vendor Profile</AlertDialogTitle>
            
                <div className='flex gap-10 w-[90%] mr-auto ml-auto'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex justify-between gap-2 mb-3">
                    <Formfield
                        control={form.control}
                        name="vendor_name"
                        placeholder="Example catering Services Ltd."
                        type="text"
                        label="Vendor Name"
                        className='w-[1/2]'
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
                        className='w-[1/2]'
                        label="Logo"
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
                        <AlertDialogFooter className='mt-5'>
                        <AlertDialogCancel >Cancel</AlertDialogCancel>
                        {!form.formState.isValid ? ( <Button type="submit" onClick={() => console.log('Form Errors:', form.formState.errors)} > Update </Button> ) :
                       (<AlertDialogAction  type="submit">  Update </AlertDialogAction> )}
                        </AlertDialogFooter>
                    </form>
                    </Form>    
                    </div>
            </AlertDialogContent>
        </AlertDialog>
    </>
  )
}

export default VendorProfileAction
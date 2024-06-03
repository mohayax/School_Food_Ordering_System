import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProfileService } from "@/services/profile-services";


export const getCustomerProfile  = createAsyncThunk("customer/getProfile", async () => {
    try{
        const response = await ProfileService.get_customer_profile()
        return response.data
    }
    catch (error){
        return toast.error(`${error.response.data}` || "something went wrong")
    }
})


export const updateCustomerProfile  = createAsyncThunk("customer/updateProfile", async (data) => {
    try{
        const response = await ProfileService.update_customer_profile(data)
        return toast.success(`${response.data}` || 'Profile Updated Successfully')
    }
    catch (error){
        return toast.error(`${error.response.data}` || "something went wrong")
    }
})


export const createCustomerProfile = createAsyncThunk("vendor/createProfile", async (data) => {
    try{
        const response = await ProfileService.create_customer_profile(data)
        return toast.success(`${response.data}` || 'Customer Profile Created Successfully')
    }
    catch (error){
        return toast.error(`${error.response.data}` || "something went wrong")
    }
})

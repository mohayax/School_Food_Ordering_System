import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProfileService } from "@/services/profile-services";


export const getCustomerProfile  = createAsyncThunk("customer/getProfile", async (_,{ rejectWithValue }) => {
    try{
        const response = await ProfileService.get_customer_profile()
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const updateCustomerProfile  = createAsyncThunk("customer/updateProfile", async (data, { rejectWithValue }) => {
    try{
        const response = await ProfileService.update_customer_profile(data)
        return toast.success(`${response.data}` || 'Profile Updated Successfully')
    }
    catch (error){
       toast.error(`${error.response.data}` || "something went wrong")
       return rejectWithValue(`${error.response.data}`)
    }
})


export const createCustomerProfile = createAsyncThunk("vendor/createProfile", async (data, { rejectWithValue }) => {
    try{
        const response = await ProfileService.create_customer_profile(data)
        return toast.success(`${response.data}` || 'Customer Profile Created Successfully')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const customer_get_vendor  = createAsyncThunk("customer/getVendor", async (id,{ rejectWithValue }) => {
    try{
        const response = await ProfileService.customer_get_vendor(id)
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})

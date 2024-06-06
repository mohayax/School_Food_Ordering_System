import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProfileService } from "@/services/profile-services";


export const createVendorProfile = createAsyncThunk("vendor/vendorProfile", async (data, { rejectWithValue }) => {
    try{
        const response = await ProfileService.create_vendor_profile(data)
        return toast.success(`${response.data}` || 'Vendor Profile Created Successfully')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})

export const updateVendorProfile  = createAsyncThunk("vendor/updateProfile", async (data, { rejectWithValue }) => {
    try{
        const response = await ProfileService.update_vendor_profile(data)
        return toast.success(`${response.data}` || 'Vendor Profile Update Successfully')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const getVendorProfile  = createAsyncThunk("vendor/getProfile", async (_,{ rejectWithValue }) => {
    try{
        const response = await ProfileService.get_vendor_profile()
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const getVendorList  = createAsyncThunk("vendor/getVendors", async (_,{ rejectWithValue }) => {
    try{
        const response = await ProfileService.get_vendor_list()
        return response.data.results
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProfileService } from "@/services/profile-services";

export const createVendorProfile = createAsyncThunk("vendor/vendorProfile", async (data) => {
    try{
        const response = await ProfileService.create_vendor_profile(data)
        return toast.success(`${response.data}` || 'Vendor Profile Created Successfully')
    }
    catch (error){
        return toast.error(`${error.response.data}` || "something went wrong")
    }
})

export const updateVendorProfile  = createAsyncThunk("vendor/updateProfile", async (data) => {
    try{
        const response = await ProfileService.update_vendor_profile(data)
        return toast.success(`${response.data}` || 'Vendor Profile Update Successfully')
    }
    catch (error){
        return toast.error(`${error.response.data}` || "something went wrong")
    }
})


export const getVendorProfile  = createAsyncThunk("vendor/getProfile", async () => {
    try{
        const response = await ProfileService.get_vendor_profile()
        return response.data
    }
    catch (error){
        return toast.error(`${error.response.data}` || "something went wrong")
    }
})


export const getVendorList  = createAsyncThunk("vendor/getVendors", async () => {
    try{
        const response = await ProfileService.get_vendor_list()
        return response.data
    }
    catch (error){
        return toast.error(`${error.response.data}` || "something went wrong")
    }
})


import { createSlice } from "@reduxjs/toolkit";
import { getVendorProfile, createVendorProfile } from "./vendor-thunks";


const initialState = {
    isLoading: false,
    error: false,
    vendor_profile: null,
    vendorLoading: false,
    newVendor: false,
    vendorError: false
}



const vendorProfileSlice = createSlice({
    name: "vendorProfile",
    initialState,
    extraReducers (builder){
        builder
        .addCase(getVendorProfile.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getVendorProfile.fulfilled, (state, action) =>{
            state.isLoading = false
            state.vendor_profile = action.payload
            console.log("ven--profile--from slice:", action.payload)
            
        })
        .addCase(getVendorProfile.rejected, (state) => {
            state.error = true
        })
        .addCase(createVendorProfile.pending, (state) => {
            state.vendorLoading = true
        })
        .addCase(createVendorProfile.fulfilled, (state) =>{
            state.vendorLoading = false
            state.newVendor = true
        })
        .addCase(createVendorProfile.rejected, (state) =>{
            state.vendorLoading = false
            state.newVendor = false
            state.vendorError = true
        })
    }
})

export default vendorProfileSlice.reducer
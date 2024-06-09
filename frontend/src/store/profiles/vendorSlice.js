import { createSlice } from "@reduxjs/toolkit";
import { getVendorProfile } from "./vendor-thunks";


const initialState = {
    isLoading: false,
    error: false,
    vendor_profile: null,
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
            state.profile = action.payload
            console.log("ven--profile--from slice:", action.payload)
            
        })
        .addCase(getVendorProfile.rejected, (state) => {
            state.error = true
        })
    }
})

export default vendorProfileSlice.reducer
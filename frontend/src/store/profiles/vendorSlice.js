import { createSlice } from "@reduxjs/toolkit";
import { getVendorProfile } from "./vendor-thunks";


const initialState = {
    isLoading: false,
    error: false,
    profile: []
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
            console.log("profile--from slice:", action.payload.data)
            state.profile = action.payload.data
        })
        .addCase(getVendorProfile.rejected, (state) => {
            state.error = true
        })
    }
})

export default vendorProfileSlice.reducer
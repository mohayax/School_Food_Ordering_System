import { createSlice } from "@reduxjs/toolkit";
import { getVendorList } from "./vendor-thunks";

const initialState = {
    isLoading: false,
    error: false,
    vendors: null
}



const vendorListSlice = createSlice({
    name: "vendorList",
    initialState,
    extraReducers (builder){
        builder
        .addCase(getVendorList.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getVendorList.fulfilled, (state, action) =>{
            state.isLoading = false
            state.vendors = action.payload
            console.log("vendors--from slice:", action.payload)
        })
        .addCase(getVendorList.rejected, (state, action) => {
            state.error = true
            state.isLoading = false
            console.log("err--", action.payload)
        })
    }
})

export default vendorListSlice.reducer
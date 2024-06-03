import { createSlice } from "@reduxjs/toolkit";
import { getVendorList } from "./vendor-thunks";

const initialState = {
    isLoading: false,
    error: false,
    vendors: []
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
            console.log("vendors--from slice:", action.payload.data)
            state.vendors = action.payload.data
        })
        .addCase(getVendorList.rejected, (state) => {
            state.error = true
        })
    }
})

export default vendorListSlice.reducer
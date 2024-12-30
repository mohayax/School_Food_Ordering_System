import { createSlice } from "@reduxjs/toolkit";
import { get_vendor_orders } from "./order-thunks";



const initialState = {
    error: false,
    isLoading: false,
    vendor_orders: [],
}



const vendorOrderSlice = createSlice({
    'name': "vendor_order",
    initialState,
    extraReducers (builder){
        builder
        .addCase(get_vendor_orders.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        .addCase(get_vendor_orders.fulfilled, (state, action) =>{
            state.isLoading = false
            state.vendor_orders = action.payload
        })
        .addCase(get_vendor_orders.rejected, (state) => {
            state.error = true
        })
       
    }
})


export default vendorOrderSlice.reducer
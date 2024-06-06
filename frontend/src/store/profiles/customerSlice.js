import { createSlice } from "@reduxjs/toolkit";
import { getCustomerProfile } from "./customer-thunks";
import { createCustomerProfile, customer_get_vendor } from "./customer-thunks";


const initialState = {
    isLoading: false,
    error: false,
    customer: {},
    newCustomer: false,
    vendor_loading: false,
    customer_vendor_profile: {}
}



const customerProfileSlice = createSlice({
    name: "customerProfile",
    initialState,
    extraReducers (builder){
        builder
        .addCase(getCustomerProfile.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCustomerProfile.fulfilled, (state, action) =>{
            state.isLoading = false
            state.customer = action.payload
        })
        .addCase(getCustomerProfile.rejected, (state) => {
            state.error = true
        })
        .addCase(createCustomerProfile.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createCustomerProfile.fulfilled, (state) => {
            state.isLoading = false
            state.newCustomer = true
        })
        .addCase(createCustomerProfile.rejected, (state) => {
            state.error = true
        })
        .addCase(customer_get_vendor.pending, (state, action) => {
            state.vendor_loading = true
        })
        .addCase(customer_get_vendor.fulfilled, (state, action) => {
            state.vendor_loading = false
            state.customer_vendor_profile = action.payload
        })
    }
})

export default customerProfileSlice.reducer
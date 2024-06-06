import { createSlice } from "@reduxjs/toolkit";
import { getCustomerProfile } from "./customer-thunks";
import { createCustomerProfile } from "./customer-thunks";


const initialState = {
    isLoading: false,
    error: false,
    customer: {},
    newCustomer: false,
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
    }
})

export default customerProfileSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { getCustomerProfile } from "./customer-thunks";


const initialState = {
    isLoading: false,
    error: false,
    profile: []
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
            console.log("Cus--profile--from slice:", action.payload.data)
            state.profile = action.payload.data
        })
        .addCase(getCustomerProfile.rejected, (state) => {
            state.error = true
        })
    }
})

export default customerProfileSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { place_order, get_customer_orders, delete_order } from "./order-thunks";



const initialState = {
    error: false,
    isLoading: false,
    order_pending: false,
    user_orders: null,
    del_pending: false
}



const orderSlice = createSlice({
    'name': "customer_order",
    initialState,
    extraReducers (builder){
        builder
        .addCase(get_customer_orders.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        .addCase(get_customer_orders.fulfilled, (state, action) =>{
            state.isLoading = false
            state.error = false
            state.user_orders = action.payload
        })
        .addCase(get_customer_orders.rejected, (state) => {
            state.error = true
        })
        .addCase(place_order.pending, (state) => {
            state.order_pending= true
        })
        .addCase(place_order.fulfilled, (state) =>{
            state.order_pending = false
        })
        .addCase(delete_order.pending, (state) => {
            state.del_pending = true
        })
        .addCase(delete_order.fulfilled, (state) =>{
            state.del_pending = false
        })
    }
})


export default orderSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { get_user_cart, get_user_cart_items } from "./cart-thunks";


const initialState = {
    error: false,
    isLoading: false,
    user_cart: {},
    items_loading: false,
    cart_items: null
}



const cartSlice = createSlice({
    'name': "cart",
    initialState,
    extraReducers (builder){
        builder
        .addCase(get_user_cart.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        .addCase(get_user_cart.fulfilled, (state, action) =>{
            state.isLoading = false
            state.error = false
            state.user_cart = action.payload
            console.log("user-cart:", action.payload)
        })
        .addCase(get_user_cart.rejected, (state) => {
            state.error = true
        })
        .addCase(get_user_cart_items.pending, (state) => {
            state.items_loading = true
        })
        .addCase(get_user_cart_items.fulfilled, (state, action) =>{
            state.items_loading = false
            state.cart_items = action.payload
            console.log("user-cart-items:", action.payload)
        })
    }
})


export default cartSlice.reducer
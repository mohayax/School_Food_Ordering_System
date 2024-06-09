import { createSlice } from "@reduxjs/toolkit";
import { get_menu_item } from "./menuItems-thunks";
import { getVendorItems } from "./menuItems-thunks";

const initialState = {
    error: false,
    isLoading: false,
    menu_item: {},
    items_loading: false,
    vendor_items: null
}



const menuItemSlice = createSlice({
    'name': "menuItem",
    initialState,
    extraReducers (builder){
        builder
        .addCase(get_menu_item.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        .addCase(get_menu_item.fulfilled, (state, action) =>{
            state.isLoading = false
            state.error = false
            state.menu_item = action.payload
        })
        .addCase(get_menu_item.rejected, (state) => {
            state.error = true
        })
        .addCase(getVendorItems.pending, (state) => {
            state.items_loading = true
        })
        .addCase(getVendorItems.fulfilled, (state, action) =>{
            state.items_loading = false
            state.vendor_items = action.payload
            console.log("vendor items", action.payload)
        })
    }
})


export default menuItemSlice.reducer
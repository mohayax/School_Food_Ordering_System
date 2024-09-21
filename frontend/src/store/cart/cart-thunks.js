import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartServices } from "@/services/cart-services";
import { toast } from "react-toastify";


export const add_to_cart  = createAsyncThunk(
    "cart/addItem", 
    async (payload,
    { rejectWithValue }) => {
    try{
        const response = await CartServices.addToCart(payload?.item_id, payload?.quantity)
        return toast.success(`${response.data}` || 'Item Added Successfully')
    }
    catch (error){
        toast.error(`${error.response.statusText}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const get_user_cart  = createAsyncThunk("cart/getCart", async (_,{ rejectWithValue }) => {
    try{
        const response = await CartServices.getUserCart()
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})



export const  update_cart_item = createAsyncThunk("cart/updateItem", async (payload,{ rejectWithValue }) => {
    try{
        const response = await CartServices.update_cart_item(payload?.item_id, payload?.data)
        return toast.success(`${response.data}` || 'Item updated')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const  remove_cart_item = createAsyncThunk("cart/removeItem", async (item_id, { rejectWithValue }) => {
    try{
        const response = await CartServices.delete_cart_item(item_id)
        return toast.success(`${response.data}` || 'Item removed')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})



export const  get_user_cart_items = createAsyncThunk("cart/getCartItems", async (_,{ rejectWithValue }) => {
    try{
        const response = await CartServices.user_cart_items()
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})
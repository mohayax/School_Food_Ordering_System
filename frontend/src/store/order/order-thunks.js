import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { OrderServies } from "@/services/order-serives";


export const  place_order = createAsyncThunk("order/place-order", async (_,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.place_order()
        return toast.success(`${response.data}` || 'order successfull')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const  place_item_order = createAsyncThunk("order/place-order", async (item_id,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.place_item_order(item_id)
        return toast.success(`${response.data}` || 'order successfull')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const  get_customer_orders = createAsyncThunk("order/get-cust-orders", async (_,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.get_customer_orders()
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})

export const  get_vendor_orders = createAsyncThunk("order/get-vendor-orders", async (_,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.get_vendor_orders()
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})

export const  update_order = createAsyncThunk("order/update-order", async (payload,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.update_order(payload?.id, payload?.payload)
        return toast.success(`${response.data}` || 'order successfull')
    }
    catch (error){
        toast.error(`${error.res}` || "something went wrong")
        console.log("order-eerrr", error.response.data[0])
        return rejectWithValue(`${error.response.data}`)
    }
})

export const  delete_order = createAsyncThunk("order/delete-order", async (order_id,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.delete_order(order_id)
        return toast.success(`${response.data}` || 'order cancelled')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})

export const  get_single_order = createAsyncThunk("order/get-order", async (order_id,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.delete_order(order_id)
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const get_recommendations = createAsyncThunk("order/recommendations", async (_,{ rejectWithValue }) => {
    try{
        const response = await OrderServies.get_recommendations()
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})
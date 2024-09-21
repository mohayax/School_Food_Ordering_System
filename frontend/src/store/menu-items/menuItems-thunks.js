import { createAsyncThunk } from "@reduxjs/toolkit";
import { MenuItemServices } from "@/services/menu-items-services";
import { toast } from "react-toastify";



export const getVendorItems  = createAsyncThunk("vendor/getItems", async (id,{ rejectWithValue }) => {
    try{
        const response = await MenuItemServices.get_vendor_items(id)
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const getCustomerVendorItems  = createAsyncThunk("customer/vendor/getItems", async (id,{ rejectWithValue }) => {
    try{
        const response = await MenuItemServices.get_customer_vendor_items(id)
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const create_menu_item  = createAsyncThunk("menuItems/create", async (data,{ rejectWithValue }) => {
    try{
        const response = await MenuItemServices.create_menu_item(data)
        return toast.success(`${response.data}` || 'Item Added Successfully')
    }
    catch (error){
        toast.error(`${error.response}` || "something went wrong")
        return rejectWithValue(`${error.response}`)
    }
})

export const get_menu_item  = createAsyncThunk("menuItems/getItem", async (id,{ rejectWithValue }) => {
    try{
        const response = await MenuItemServices.get_menu_item(id)
        return response.data
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})


export const update_menu_item  = createAsyncThunk("menuItems/getItem", async ({id, data},{ rejectWithValue }) => {
    try{
        const response = await MenuItemServices.update_menu_item(id, data)
        return toast.success(`${response.data}` || 'Item Updated Successfully')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})

export const delete_menu_item  = createAsyncThunk("menuItems/getItem", async (id, { rejectWithValue }) => {
    try{
        const response = await MenuItemServices.delete_menu_item(id)
        return toast.success(`${response.data}` || 'Item Removed!')
    }
    catch (error){
        toast.error(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})
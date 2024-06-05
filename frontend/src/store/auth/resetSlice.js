import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';


const initialState = {
    error: false,
    isLoading: false,
    reset: false
}




export const resetPassword = createAsyncThunk("auth/reset-password", async(data, {rejectWithValue}) =>{
    try{
        const resposne = await AuthService.reset_password(data)
        return toast.success(`${resposne.data}`)
    }
    catch (error){
        toast.error(`${error.response.data}` || "Something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})









export const resetSlice = createSlice({
    name: 'resetPassword',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.isLoading = false
                state.reset = true
            })
            .addCase(resetPassword.rejected, (state) => {
                state.error = true
            })
    }
})


export default resetSlice.reducer
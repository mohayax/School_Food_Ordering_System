import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';


const initialState = {
    error: false,
    isLoading: false,
    account: false
}




export const forgotPassword = createAsyncThunk("auth/forgot-password", async(data, {rejectWithValue}) => {
    try{
        const resposne = await AuthService.forgot_password(data)
        return toast.success(`${resposne.data}`)
    }
    catch (error){
        toast.error(`${error.response.data}` || "Something went wrong")
        return rejectWithValue(`${error.response.data}`)
    }
})








export const forgotSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.isLoading = false
                state.account = true
            })
            .addCase(forgotPassword.rejected, (state) => {
                state.error = true
                state.isLoading = false
            })
    }
})


export default forgotSlice.reducer
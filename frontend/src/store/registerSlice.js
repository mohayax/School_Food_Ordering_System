import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    account: false,
    error: false
}

export const register = createAsyncThunk("register/signup", async (data) => {
    try {
        const response = await AuthService.signup(data)
        return toast.success(`${response.data}` || "Account created sucessfully")

    } catch (error) {
        return toast.warn(`${error.response.data}` || "something went wrong")
    }
})

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(register.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state) => {
                state.account = true
                state.isLoading = false
            })
            .addCase(register.rejected, (state, action) => {
                state.error = true
                state.account = false
            })
    }
})



export default registerSlice.reducer;
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    error: null
}

export const register = createAsyncThunk("register/signup", async (data) => {
    try {
        const response = await AuthService.signup(data)
        return toast.success(response?.data?.success || "Account created sucessfully")

    } catch (error) {
        return toast.error(error.response.message || "Something went wrong")
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
                state.isLoading = false
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})



export default registerSlice.reducer;
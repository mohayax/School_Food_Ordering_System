import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    error: false,
    account: false
}



export const register = createAsyncThunk("register/signup", async (data, { rejectWithValue }) => {
    
    try {
        const response = await AuthService.signup(data)
        return toast.success(`${response.data}` || "Account created sucessfully")

    } catch (error) {
        toast.warn(`${error.response.data}` || "something went wrong")
        return rejectWithValue(`${error.response.data}` || "something went wrong")
    }
})

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false
                state.error = false
                state.account = true
                
            })
            .addCase(register.rejected, (state) => {
                state.error = true
                state.account = false
                state.isLoading = false
            })
    }
})


export const {addEmail} = registerSlice.actions
export default registerSlice.reducer;
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';


const initialState = {
    user: null,
    error: null,
    isLoading: false,
    isAuthenticated: false
}

export const login = createAsyncThunk("auth/login", async (credentials) => {
    try {
        const response = await AuthService.login(credentials)
        console.log("data:", response.data)
        const access_token = response.data.access
        window.localStorage.setItem('accessToken', access_token)
        toast.success("Login sucessfull")

    } catch (error) {
        return toast.error(error.response.data.detail || "Something went wrong")
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            window.localStorage.removeItem('accessToken')
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state) => {
                state.isLoading = false
                state.isAuthenticated = true
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export const {logOut} = authSlice.actions
export default authSlice.reducer
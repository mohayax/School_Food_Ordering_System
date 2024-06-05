import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';


const initialState = {
    error: false,
    isLoading: false,
    isAuthenticated: false
}

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
    try {
        const response = await AuthService.login(credentials)
        console.log("data:", response.data)
        const access_token = response.data.access
        window.localStorage.setItem('accessToken', access_token)
        toast.success("Login sucessfull")

    } catch (error) {
        toast.error(`${error.response.data.detail}` || "Something went wrong")
        return rejectWithValue(`${error.response.data.detail}` || "Something went wrong")
    }
})








export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            window.localStorage.removeItem('accessToken')
            state.isAuthenticated = false
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoading = true
                state.isAuthenticated = false
            })
            .addCase(login.fulfilled, (state) => {
                state.isLoading = false
                state.isAuthenticated = true
            })
            .addCase(login.rejected, (state) => {
                state.error = true
                state.isAuthenticated = false
            })
    }
})

export const {logOut} = authSlice.actions
export default authSlice.reducer
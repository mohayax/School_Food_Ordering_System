import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AuthService } from '@/services/auth-services';
import { toast } from 'react-toastify';


const initialState = {
    error: false,
    isLoading: false,
    isAuthenticated: false,
    user: {}
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
        console.log("err:",error.response.data.detail)
        return rejectWithValue(error.response.data)
    }
})


export const getUser = createAsyncThunk("auth/getUser", async (_, { rejectWithValue }) =>{
    try{
        const response = await AuthService.get_user()
        return response.data
    }
    catch(error){
        return rejectWithValue(error.response.data)
    }
})








export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isAuthenticated = false
            window.localStorage.removeItem('accessToken')
            window.location.href = '/'
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
                state.error = false
            })
            .addCase(login.rejected, (state) => {
                state.error = true
                state.isLoading = false
                state.isAuthenticated = false
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
    }
})

export const {logOut} = authSlice.actions
export default authSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../../services/auth-services";
import { toast } from "react-toastify";


export const signUp = createAsyncThunk('auth/signup', async(credentials)=>{
    try{
        const response = await AuthService.signup(credentials)
        toast.success('Account created successfully!')
        return response;
    }
    catch(error){
        return toast.error(error)
    }
})

const initialState = {
    loading: false,
    error: null
}


const signupSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(signUp.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(signUp.fulfilled, (state, action) =>{
            state.loading = false
        })
        .addCase(signUp.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export default signupSlice.reducer
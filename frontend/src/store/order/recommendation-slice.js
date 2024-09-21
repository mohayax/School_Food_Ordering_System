import { createSlice } from "@reduxjs/toolkit";
import { get_recommendations } from "./order-thunks";



const initialState = {
    error: false,
    isLoading: false,
    recommendations: []
}



const recommendationsSlice = createSlice({
    'name': "recommendations",
    initialState,
    extraReducers (builder){
        builder
        .addCase(get_recommendations.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        .addCase(get_recommendations.fulfilled, (state, action) =>{
            state.isLoading = false
            state.error = false
            state.recommendations = action.payload
        })
        .addCase(get_recommendations.rejected, (state) => {
            state.error = true
        })
        
    }
})


export default recommendationsSlice.reducer
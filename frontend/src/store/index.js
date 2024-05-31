import {configureStore} from '@reduxjs/toolkit';
import registerReducer from "./auth/registerSlice"
import authReducer from './auth/loginSlice';
import forgotReducer from './auth/forgotSlice';
import resetReducer from './auth/resetSlice';

const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: authReducer,
        forgotPassword: forgotReducer,
        resetPassword: resetReducer
    }
})

export default store;
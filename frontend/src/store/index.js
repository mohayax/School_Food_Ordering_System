import {configureStore} from '@reduxjs/toolkit';
import registerReducer from "./auth/registerSlice"
import authReducer from './auth/loginSlice';
import forgotReducer from './auth/forgotSlice';
import resetReducer from './auth/resetSlice';
import vendorReducer from './profiles/vendorSlice';
import vendorListReducer from './profiles/vendor-list-slice';

const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: authReducer,
        forgotPassword: forgotReducer,
        resetPassword: resetReducer,
        vendorProfile: vendorReducer,
        vendorList: vendorListReducer
    }
})

export default store;
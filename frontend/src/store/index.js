import {configureStore} from '@reduxjs/toolkit';
import registerReducer from "./auth/registerSlice"
import authReducer from './auth/loginSlice';
import forgotReducer from './auth/forgotSlice';
import resetReducer from './auth/resetSlice';
import vendorReducer from './profiles/vendorSlice';
import vendorListReducer from './profiles/vendor-list-slice';
import customerReducer from './profiles/customerSlice';

const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: authReducer,
        forgotPassword: forgotReducer,
        resetPassword: resetReducer,
        vendorProfile: vendorReducer,
        vendorList: vendorListReducer,
        customerProfile: customerReducer,
    }
})

export default store;
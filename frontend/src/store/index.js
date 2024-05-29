import {configureStore} from '@reduxjs/toolkit';
import registerReducer from "./registerSlice"
import authReducer from './loginSlice';

const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: authReducer
    }
})

export default store;
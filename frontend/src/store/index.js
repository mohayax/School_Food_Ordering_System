import {configureStore} from '@reduxjs/toolkit';
import registerReducer from "./auth/registerSlice"
import authReducer from './auth/loginSlice';
import forgotReducer from './auth/forgotSlice';
import resetReducer from './auth/resetSlice';
import vendorReducer from './profiles/vendorSlice';
import vendorListReducer from './profiles/vendor-list-slice';
import customerReducer from './profiles/customerSlice';
import menuItemReducer from './menu-items/item-slice'
import cartReducer from './cart/cart-slice';
import orderReducer from './order/order-slice';

const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: authReducer,
        forgotPassword: forgotReducer,
        resetPassword: resetReducer,
        vendorProfile: vendorReducer,
        vendorList: vendorListReducer,
        customerProfile: customerReducer,
        menuItem: menuItemReducer,
        cart: cartReducer,
        customer_order: orderReducer
    }
})

export default store;
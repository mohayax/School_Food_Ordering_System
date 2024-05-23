import { combineReducers } from "@reduxjs/toolkit";
import signUpReducer from "./features/auth-slice";


const rootReducer = combineReducers({
    auth: signUpReducer
})


export default rootReducer;
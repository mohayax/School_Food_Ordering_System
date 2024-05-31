import axiosInstance from "../utils/axios-instance.js";


export class AuthService {
    static async signup(data){
        return axiosInstance.post('accounts/signup', data)
    }
    
    static async login(credentials){
        return axiosInstance.post('token/', credentials)
    }

    static async forgot_password(data){
        return axiosInstance.post('accounts/forgot-password', data)
    }

    static async reset_password(data){
        return axiosInstance.post('accounts/reset-password', data)
    }
}

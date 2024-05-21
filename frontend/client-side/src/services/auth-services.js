import axiosInstance from "../utils/axios-instance";


export class AuthService {
    static async signup(){
        return axiosInstance.post('accounts/signup')
    }
    
    static async login(){
        return axiosInstance.post('token/')
    }

    static async forgot_password(){
        return axiosInstance.post('accounts/forgot-password')
    }

    static async reset_password(){
        return axiosInstance.post('accounts/reset-password')
    }
}

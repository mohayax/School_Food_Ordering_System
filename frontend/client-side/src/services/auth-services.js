import axiosInstance from "../utils/axios-instance";


export class AuthService {
    static async signup(credentials){
        return axiosInstance.post('accounts/signup', credentials)
    }
    
    static async login(credentials){
        return axiosInstance.post('token/', credentials)
    }

    static async forgot_password(){
        return axiosInstance.post('accounts/forgot-password')
    }

    static async reset_password(){
        return axiosInstance.post('accounts/reset-password')
    }
}

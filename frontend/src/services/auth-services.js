import api from "../utils/axios-instance.js";


export class AuthService {
    static async signup(data){
        return api.post('accounts/signup', data)
    }
    
    static async login(credentials){
        return api.post('token/', credentials)
    }

    static async get_user(){
        return api.get('accounts/get-user')
    }

    static async forgot_password(data){
        return api.post('accounts/forgot-password', data)
    }

    static async reset_password(data){
        return api.post('accounts/reset-password', data)
    }
}

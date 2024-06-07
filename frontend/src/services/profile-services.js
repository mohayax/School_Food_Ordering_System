import api from "@/utils/axios-instance";

export class ProfileService {
    static async create_vendor_profile(data){
        return api.post('vendors/vendor-profile', data)
    }

    static async update_vendor_profile(data){
        return api.put('vendors/vendor-profile-action', data)
    }

    static async get_vendor_profile(){
        return api.get('vendors/vendor-profile-action')
    }

    static async get_vendor_list(){
        return api.get('vendors/')
    }


    static async create_customer_profile(data){
        return api.post('customer/create-customer-profile', data)
    }

    static async update_customer_profile(data){
        return api.put('customer/customer-profile-action', data)
    }

    static async get_customer_profile(){
        return api.get('customer/customer-profile-action')
    }

    static async customer_get_vendor(id){
        return api.get(`vendors/vendor-customer-view/${id}`)
    }
}
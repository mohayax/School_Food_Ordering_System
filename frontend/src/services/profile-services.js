import axiosInstance from "@/utils/axios-instance";

export class ProfileService {
    static async create_vendor_profile(data){
        return axiosInstance.post('vendors/vendor-profile', data)
    }

    static async update_vendor_profile(data){
        return axiosInstance.put('vendors/vendor-profile-action', data)
    }

    static async get_vendor_profile(){
        return axiosInstance.get('vendors/vendor-profile-action')
    }

    static async get_vendor_list(){
        return axiosInstance.get('vendors/')
    }


    static async create_customer_profile(data){
        return axiosInstance.post('customer/create-customer-profile', data)
    }

    static async update_customer_profile(data){
        return axiosInstance.put('customer/customer-profile-action', data)
    }

    static async get_customer_profile(){
        return axiosInstance.get('customer/customer-profile-action')
    }

    static async customer_get_vendor(id){
        return axiosInstance.get(`vendors/vendor-customer-view/${id}`)
    }
}
import axiosInstance from "@/utils/axios-instance";

export class MenuItemServices {
    static async create_menu_item(data){
        return await axiosInstance.post('/menu-items/create-menu-item', data)
    }

    static async get_menu_item(id){
        return await axiosInstance.get(`/menu-items/${id}`)
    }

    static async update_menu_item(id, data){
        return await axiosInstance.put(`/menu-items/${id}`, data)
    }

    static async  delete_menu_item(id){
        return await axiosInstance.delete(`/menu-items/${id}`)
    }

    static async get_vendor_items(id){
        return await axiosInstance.get(`/menu-items/vendor-items/${id}`)
    } 
}
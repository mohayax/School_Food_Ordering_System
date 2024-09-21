import api from "@/utils/axios-instance";

export class MenuItemServices {
    static async create_menu_item(data){
        return await api.post('/menu-items/create-menu-item', data)
    }

    static async get_menu_item(id){
        return await api.get(`/menu-items/${id}`)
    }

    static async update_menu_item(id, data){
        return await api.put(`/menu-items/${id}`, data)
    }

    static async  delete_menu_item(id){
        return await api.delete(`/menu-items/${id}`)
    }

    static async get_vendor_items(){
        return await api.get('/menu-items/vendor-items/items')
    } 

    static async get_customer_vendor_items(id){
        return await api.get(`/menu-items/customer-vendor-items/${id}`)
    } 
    

    
}
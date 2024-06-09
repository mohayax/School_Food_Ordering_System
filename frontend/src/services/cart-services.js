import api from "@/utils/axios-instance";

export class CartServices{
    static async addToCart(item_id, data){
        return await api.post(`orders/add-to-cart/${item_id}`, data)
    }

    static async getUserCart(){
        return await api.get('orders/cart')
    }

    static async user_cart_items(){
        return await api.get('orders/cart/items')
    }

    static async update_cart_item(item_id, data){
        return await api.put(`orders/cart/items/${item_id}`, data)
    }

    static async delete_cart_item(item_id){
        return await api.delete(`orders/cart/items/${item_id}`)
    }
}
import api from "@/utils/axios-instance";

export class OrderServies {
    static async place_order(){
        return await api.post('orders/place-order')
    }

    static async get_single_order(order_id){
        return await api.get(`orders/items/${order_id}`)
    }

    static async update_order(order_id, data){
        return await api.put(`orders/items/${order_id}`, data)
    }

    static async delete_order(order_id){
        return await api.delete(`orders/items/${order_id}`)
    }

    static async get_customer_orders(){
        return await api.get('orders/customer/orders')
    }

    static async get_vendor_orders(){
        return await api.get('orders/vendor/orders')
    }
}
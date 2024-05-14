from rest_framework import serializers
from .models import Order, OrderItem, Cart, CartItem
from customer.serializers import CustomerSerializer



class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields = ['customer', 'customer_name', 'order_date', 'order_status', 'total_amount', 'order_items']




class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    # customer = CustomerSerializer(read_only = True)
    cart_items = CartItemSerializer(many=True, read_only = True)
    class Meta:
        model = Cart
        fields = ['customer', 'total_items', 'total_price', 'cart_items']





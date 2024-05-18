from rest_framework import serializers
from .models import Order, OrderItem, Cart, CartItem
from customer.serializers import CustomerSerializer



class OrderItemSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True)
    class Meta:
        model = Order
        fields = ['customer', 'customer_name', 'order_date', 'order_status', 'total_amount', 'order_items']

    def create(self, validated_data):
        order_items_data = validated_data.pop('order_items')
        order = Order.objects.create(**validated_data)
        for item_data in order_items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order




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





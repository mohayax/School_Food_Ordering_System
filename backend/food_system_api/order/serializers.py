from rest_framework import serializers
from .models import Order, OrderItem
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




from rest_framework import serializers
from .models import MenuItem
from vendor.serializers import VendorSerializer


class MenuItemSerializer(serializers.ModelSerializer):
    # vendor = VendorSerializer()
    class Meta:
        model = MenuItem
        fields = '__all__'
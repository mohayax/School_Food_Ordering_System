from rest_framework import serializers
from .models import MenuItem
from vendor.serializers import VendorSerializer
from drf_extra_fields.fields import Base64ImageField

class MenuItemSerializer(serializers.ModelSerializer):
    # vendor = VendorSerializer()
    item_photo = Base64ImageField(required=False)
    class Meta:
        model = MenuItem
        fields = ['id', 'item_name', 'item_price', 'item_category', 'item_description','availability_status', 'item_photo', 'vendor']
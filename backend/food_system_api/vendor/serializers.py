from .models import VendorProfile
from rest_framework import serializers


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendorProfile
        fields = ['vendor_name', 'vendor_description', 'vendor_address', 'vendor_contact_number', 'vendor_logo']
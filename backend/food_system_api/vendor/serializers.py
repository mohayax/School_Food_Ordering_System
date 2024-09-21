from .models import VendorProfile
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField

class VendorSerializer(serializers.ModelSerializer):
    vendor_logo = Base64ImageField(required=False)

    class Meta:
        model = VendorProfile
        fields =  ['id', 'vendor_name', 'vendor_description', 'vendor_address', 'vendor_contact_number', 'vendor_logo', 'vendor_openining_hours']

       
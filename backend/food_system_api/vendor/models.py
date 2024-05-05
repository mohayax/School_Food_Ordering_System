from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class VendorProfile(models.Model):
    vendor_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    vendor_description = models.TextField(blank=True)
    vendor_address = models.CharField(max_length=255, default=None, blank=True, null=True)
    vendor_contact_number = models.CharField(max_length=20, default=None, blank=True, null=True)
    vendor_logo = models.ImageField(upload_to='photos/%Y/%m/%d', default=None, null=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=None, null=True, related_name='vendor_profile')


    def __str__(self):
        return self.vendor_name

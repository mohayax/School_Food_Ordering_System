from django.db import models
from users.models import UserAccount

# Create your models here.

class VendorProfile(models.Model):
    vendor_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    vendor_description = models.TextField(blank=True)
    vendor_address = models.CharField(max_length=255, default=None, blank=True, null=True)
    vendor_contact_number = models.CharField(max_length=20, default=None, blank=True, null=True)
    vendor_logo = models.ImageField(upload_to='photos/%Y/%m/%d')
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE, related_name='vendor_profile')


    def __str__(self):
        return self.vendor_name

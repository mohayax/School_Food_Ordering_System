from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class CustomerProfile(models.Model):
    first_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    last_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    customer_dob = models.DateField(default=None, blank=True, null = True)
    phone_number = models.CharField(max_length=255, default=None, blank=True, null=True)
    profile_photo = models.ImageField(upload_to='photos/%Y/%m/%d', default=None, null=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=None, null=True, related_name='customer_profile')

    def get_short_name(self):
        return self.first_name
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def __self__(self):
        return f'{self.first_name} {self.last_name}'
from django.db import models
from vendor.models import VendorProfile

# Create your models here.
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)
class MenuItem(models.Model):
    
    class Availability(models.TextChoices):
        AVAILABLE = 'Available'
        UNAVAILABLE = 'Unavailable'

    class Category(models.TextChoices):
        FOOD = 'Food'
        DRINKS = 'Drinks'
        SNACKS = 'Snacks'    

    item_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    item_description = models.TextField(blank=True)
    item_photo = models.ImageField(upload_to=upload_to, default=None, null=True)
    item_price = models.CharField(max_length=255, blank=True, null=True)
    availability_status = models.CharField(choices=Availability.choices, default=Availability.AVAILABLE, blank=True, null=True)
    item_category = models.CharField(choices=Category.choices, max_length=255, default=None, blank=True, null=True)
    vendor = models.ForeignKey(VendorProfile, on_delete=models.CASCADE)

    def __self__(self):
        return self.item_name
    


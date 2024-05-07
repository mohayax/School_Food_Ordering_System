from django.db import models
from customer.models import CustomerProfile

# Create your models here.

class Order(models.Model):
    class OrderStatus(models.TextChoices):
        PENDING = 'Pending'
        CANCELED = 'Canceled'
        SUCCESSFULL = 'Successfull'

    customer = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    order_date = models.DateTimeField(auto_now_add=True)

    total_amount = models.CharField(max_length=255, default=None, blank=True, null=True)



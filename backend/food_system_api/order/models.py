from django.db import models
from customer.models import CustomerProfile
from menu_item.models import MenuItem

# Create your models here.

class Order(models.Model):
    class OrderStatus(models.TextChoices):
        PENDING = 'Pending'
        CANCELED = 'Canceled'
        SUCCESSFULL = 'Successfull'

    customer = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE, related_name='customer_order')
    customer_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    order_date = models.DateTimeField(auto_now_add=True)
    order_status = models.CharField(choices=OrderStatus.choices, default=None, blank=True, null=True)
    total_amount = models.CharField(max_length=255, default=None, blank=True, null=True)



class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    item_name = models.CharField(max_length=255, default=None, blank=True, null=True)
    item_price = models.CharField(max_length=255, default=None, blank=True, null=True)
    item_quantity = models.CharField(max_length=255, default=None, blank=True, null=True)


    def get_total_price(self):
        return self.item_price * self.item_quantity



 

# Generated by Django 5.0.4 on 2024-07-10 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0008_order_customer_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='item_description',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]

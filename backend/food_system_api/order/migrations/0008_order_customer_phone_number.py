# Generated by Django 5.0.4 on 2024-07-09 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0007_alter_order_order_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer_phone_number',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]

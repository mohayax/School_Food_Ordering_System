# Generated by Django 5.0.4 on 2024-05-07 18:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('customer', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('total_amount', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer.customerprofile')),
            ],
        ),
    ]

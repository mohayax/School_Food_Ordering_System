# Generated by Django 5.0.4 on 2024-05-07 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('last_name', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('customer_dob', models.DateField(blank=True, default=None, null=True)),
                ('phone_number', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('profile_photo', models.ImageField(default=None, null=True, upload_to='photos/%Y/%m/%d')),
            ],
        ),
    ]

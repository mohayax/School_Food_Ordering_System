# Generated by Django 5.0.4 on 2024-07-09 21:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0002_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customerprofile',
            name='profile_photo',
        ),
    ]

# Generated by Django 5.0.4 on 2024-05-05 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='password_reset_token',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]

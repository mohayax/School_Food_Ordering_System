from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

# Create your models here.

class UserAccountManager(BaseUserManager):

    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError('invalid email address')


    def create_user(self,email, password = None, **extra_fields):
        if email:
            email = self.normalize_email(email)
            self.email_validator(email)

        else:
            raise ValueError('email must be provided')
        
       
        user = self.model(email = email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        email = self.normalize_email(email)
        
        user =self.create_user(email = email, password = password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user
    



class UserAccount(AbstractBaseUser, PermissionsMixin):
    USER_ROLE = (
        ("CUSTOMER", "CUSTOMER"),
        ("VENDOR", "VENDOR")
    )

    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    role = models.CharField(choices=USER_ROLE, max_length=255, default=None, blank=True, null=True)
    is_active = models.BooleanField(default =True)
    is_superuser = models.BooleanField(default =False)
    password_reset_token = models.CharField(max_length=255, blank=True, null=True)

    objects = UserAccountManager()
    USERNAME_FIELD = 'email'




    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def __str__(self):
        return self.first_name


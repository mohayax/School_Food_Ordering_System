from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import uuid
from django.core.validators import validate_email


# Create your views here.

class SignUp(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format = None):

        def email_validator(email):
            try:
                validate_email(email)
                return True
            except:
                return False
        
        data = request.data

        first_name = data['first_name']
        last_name = data['last_name']
        # phone_number = data['phone_number']
        # role = data['role']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email = email).exists():
                return Response({'error': 'email already exists'})
            else: 
                if not email_validator(email):
                    return Response({'error': 'Invalid email address'})
                else:
                    if len(password) < 8:
                        return Response({'error': 'password must be atleast 8 characters'})
                    else:
                        user = User.objects.create_user(email=email, password =password, first_name = first_name, last_name = last_name)
                        user.save()
                    return Response({'sucess': 'user created sucessfully'}, status=status.HTTP_200_OK)   
        else:
            return Response({'error': 'passwords do not match'})
        



class ForgotPassword(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request):
        data = request.data
        email = data['email']

        try:
            user = User.objects.get(email = email)
        except User.DoesNotExist:
            return Response({'error': 'User not found'},status=status.HTTP_404_NOT_FOUND )
        
        token = str(uuid.uuid4())
        user.password_reset_token = token
        user.save()

        reset_link = f'reset-password?token={token}'
        send_mail(
            "Password Reset",
            f'Click the following link to reset your password: {reset_link}',
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False
        )
        
        return Response({'message': 'Password reset link sent to your email'}, status=status.HTTP_200_OK)
             


class ResetPassword(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, *args, **kwargs):
        data = request.data
        token = request.GET.get("token")
        new_password = data['new_password']
        confirm_password = data['confirm_password']

        try:
            user = User.objects.get(password_reset_token = token)
        except User.DoesNotExist:
            return Response({'error': 'Invalid Token'},status=status.HTTP_400_BAD_REQUEST )
        
        if new_password == confirm_password:
            user.set_password(new_password)
            user.password_reset_token = None
            user.save()
            return Response({'success': 'password changed successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'passwords do not match'})
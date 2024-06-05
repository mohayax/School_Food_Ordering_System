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
from .serializers import UserSerializer


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

        email = data['email']
        role = data['role']
        password = data['password']
        password2 = data['password2']

        if data['password'] == data['password2']:
            if User.objects.filter(email = email).exists():
                return Response({'email already exists'}, status=status.HTTP_400_BAD_REQUEST)
            else: 
                if not email_validator(email):
                    return Response({'Invalid email address'}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    if len(password) < 8:
                        return Response({'password must be atleast 8 characters'}, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        user = User.objects.create_user(email=email, password =password, role = role)
                        user.save()
                        return Response({'user created sucessfully'}, status=status.HTTP_200_OK)   
        
        return Response({'passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
        



class ForgotPassword(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request):
        data = request.data
        email = data['email']

        try:
            user = User.objects.get(email = email)
        except User.DoesNotExist:
            return Response({'User not found'},status=status.HTTP_404_NOT_FOUND )
        
        token = str(uuid.uuid4())
        user.password_reset_token = token
        user.save()


        send_mail(
            "Password Reset",
            f'Your password reset token is: {token}',
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False
        )
        
        return Response({'Password reset token sent to your email'}, status=status.HTTP_200_OK)
             


class ResetPassword(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request):
        data = request.data
        token = data['token']
        new_password = data['new_password']
        confirm_password = data['confirm_password']

        try:
            user = User.objects.get(password_reset_token = token)
        except User.DoesNotExist:
            return Response({'Invalid Token'},status=status.HTTP_400_BAD_REQUEST )
        
        if data['new_password'] == data['confirm_password']:
            user.set_password(new_password)
            user.password_reset_token = None
            user.save()
            return Response({'password changed successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'passwords do not match'}, status=status.HTTP_400_BAD_REQUEST )



class UserView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        if user:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.error, status=status.HTTP_404_NOT_FOUND)
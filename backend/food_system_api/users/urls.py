from django.urls import path
from .views import SignUp, ForgotPassword, ResetPassword

urlpatterns = [
    path('signup', SignUp.as_view()),
    path('forgot-password', ForgotPassword.as_view()),
    path('reset-password', ResetPassword.as_view())
]
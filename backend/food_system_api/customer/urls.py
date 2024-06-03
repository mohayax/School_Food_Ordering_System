from django.urls import path
from .views import CustomerProfileView, CustomerProfileAction

urlpatterns = [
    path('create-customer-profile', CustomerProfileView.as_view()),
    path('customer-profile-action', CustomerProfileAction.as_view())
]
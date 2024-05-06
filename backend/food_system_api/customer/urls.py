from django.urls import path
from .views import CustomerProfileView

urlpatterns = [
    path('create-customer-profile', CustomerProfileView.as_view()),
    path('<str:id>', CustomerProfileView.as_view())
]
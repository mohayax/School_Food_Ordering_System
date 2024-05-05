from django.urls import path
from .views import VendorProfileView, VendorsView

urlpatterns = [
    path('vendor-profile', VendorProfileView.as_view() ),
    path('vendor-profile/<str:id>', VendorProfileView.as_view()),
    path('',  VendorsView.as_view())
]
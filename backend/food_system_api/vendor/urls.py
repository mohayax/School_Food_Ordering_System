from django.urls import path
from .views import VendorProfileView, VendorsView, VendorProfileAction

urlpatterns = [
    path('vendor-profile', VendorProfileView.as_view() ),
    path('vendor-profile-action', VendorProfileAction.as_view()),
    path('',  VendorsView.as_view())
]
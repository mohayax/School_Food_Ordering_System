from django.urls import path
from .views import VendorProfileView, VendorsView, VendorProfileAction, VendorCustomerView

urlpatterns = [
    path('vendor-profile', VendorProfileView.as_view() ),
    path('vendor-profile-action', VendorProfileAction.as_view()),
    path('vendor-customer-view/<str:id>', VendorCustomerView.as_view()),
    path('',  VendorsView.as_view())
]
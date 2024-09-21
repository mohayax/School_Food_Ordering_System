from django.urls import path
from .views import MenuItemView, MenuItems, GetVendorItems, GetCustomerVendorItems

urlpatterns = [
    path('', MenuItems.as_view()),
    path('create-menu-item', MenuItemView.as_view()),
    path('<str:id>', MenuItemView.as_view()),
    path('vendor-items/items', GetVendorItems.as_view()),
    path('customer-vendor-items/<str:id>', GetCustomerVendorItems.as_view())
]
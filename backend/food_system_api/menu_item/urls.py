from django.urls import path
from .views import MenuItemView, MenuItems, GetVendorItems

urlpatterns = [
    path('', MenuItems.as_view()),
    path('create-menu-item', MenuItemView.as_view()),
    path('<str:id>', MenuItemView.as_view()),
    path('vendor-items/<str:id>', GetVendorItems.as_view())
]
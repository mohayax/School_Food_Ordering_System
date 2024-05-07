from django.urls import path
from .views import MenuItemView, MenuItems

urlpatterns = [
    path('', MenuItems.as_view()),
    path('create-menu-item', MenuItemView.as_view()),
    path('<str:id>', MenuItemView.as_view() )
]
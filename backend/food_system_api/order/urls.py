from django.urls import path
from .views import OrderView


urlpatterns = [
    path('place-order', OrderView.as_view())
]
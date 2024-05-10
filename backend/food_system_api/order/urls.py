from django.urls import path
from .views import OrderView, OrderList, Add_To_Order, Get_Customer_Order, OrderItemsList, Get_Vendor_Orders


urlpatterns = [
    path('place-order', OrderView.as_view()),
    # deleting, getting, updating order
    path('<str:order_id>', OrderView.as_view()),
    # list of all orders
    path('', OrderList.as_view()),

    # order items
    # get order item
    # path('order-items/<str:order_id>', Add_To_Order.as_view()),
    # add, delete order item
    path('order-items/<str:item_id>', Add_To_Order.as_view()),
    # get all order items
    path('order-items', OrderItemsList.as_view()),

    # get order based on customer
    path('customer/<str:order_id>', Get_Customer_Order.as_view()),
    
    # get vendor view
    path('vendor/order', Get_Vendor_Orders.as_view())

]
from django.urls import path
from .views import OrderView, OrderList, Add_To_Order, Get_Customer_Order, OrderItemsList, Get_Vendor_Orders, Add_To_Cart, ViewCartItems, CartView


urlpatterns = [
    # path('place-order', OrderView.as_view()),
    # deleting, getting, updating order
    path('items/<str:order_id>', OrderView.as_view()),
    # list of all orders
    path('', OrderList.as_view()),

    
    path('place-order', Add_To_Order.as_view()),
    # get all order items
    path('order-items', OrderItemsList.as_view()),

    # get order based on customer
    path('customer/orders', Get_Customer_Order.as_view()),
    
    # get vendor view
    path('vendor/orders', Get_Vendor_Orders.as_view()),

    #add to cart
    path('add-to-cart/<str:item_id>', Add_To_Cart.as_view()),
    
    #see user's cart, total amount, total items
    path('cart', CartView.as_view()),
    
    #get all cart items of a user
    path('cart/items', ViewCartItems.as_view()),
    
    #edit and delete a particular cart item
    path('cart/items/<str:item_id>', ViewCartItems.as_view())



]
from django.urls import path
from .views import ClearCartView, OrderView, Add_To_Order, Get_Customer_Order, Get_Vendor_Orders, Add_To_Cart, ViewCartItems, CartView, RecommendationsView, OrderSingleItem


urlpatterns = [
    # deleting, getting, updating order
    path('items/<str:order_id>', OrderView.as_view()),
    
    path('place-order', Add_To_Order.as_view()),

    path('order-item/<str:item_id>', OrderSingleItem.as_view()),
    # get order based on customer
    path('customer/orders', Get_Customer_Order.as_view()),
    
    # get orders based on vendor
    path('vendor/orders', Get_Vendor_Orders.as_view()),

    #add to cart
    path('add-to-cart/<str:item_id>/<str:qtr>', Add_To_Cart.as_view()),
    
    #see user's cart, total amount, total items
    path('cart', CartView.as_view()),
    
    #get all cart items of a user
    path('cart/items', ViewCartItems.as_view()),
    
    #edit and delete a particular cart item
    path('cart/items/<str:item_id>', ViewCartItems.as_view()),

    path('clear/user-cart', ClearCartView.as_view()),

    #recommendations view
    path('recommendations/get-recommendations', RecommendationsView.as_view())
]
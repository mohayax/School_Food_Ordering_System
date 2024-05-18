from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import status
from .serializers import OrderSerializer, OrderItemSerializer, CartSerializer, CartItemSerializer
from .models import Order, OrderItem, Cart, CartItem
from rest_framework.pagination import PageNumberPagination
from customer.models import CustomerProfile
from customer.serializers import CustomerSerializer
from menu_item.models import MenuItem
from vendor.models import VendorProfile
from django.db.models import Sum


class OrderView(APIView):

    # def post(self, request):
    #     data = request.data
    #     user = request.user
    #     customer = CustomerProfile.objects.get(user = user)
    #     data['customer'] = customer.id
    #     data['customer_name'] = customer.get_full_name()
        
    #     serializer = OrderSerializer(data = request.data)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response({"success": serializer.data}, status=status.HTTP_201_CREATED)
    #     return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    

    def get(self, request, order_id = None):
        if order_id is not None:
            order = Order.objects.prefetch_related('order_items').get(id = order_id)
            serializer = OrderSerializer(order)
            return Response({"order": serializer.data}, status=status.HTTP_200_OK)
        return Response({"error": "invalid request"}, status=status.HTTP_400_BAD_REQUEST)
    


    def put(self, request, order_id = None):
        
        order = Order.objects.get(id = order_id)
        serializer = OrderSerializer(order, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": "order details updated successfully"}, status=status.HTTP_200_OK)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        

    def delete(self, request, order_id =None):
        order = Order.objects.get(id = order_id)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# customer order
class Get_Customer_Order(APIView):
    
    def get(self, request):
        try:
            user = request.user
            customer = CustomerProfile.objects.get(user = user)
            orders = Order.objects.filter(customer = customer).distinct()

            serializer = OrderSerializer(orders, many=True)
            if orders is not None:
                return Response({"customer_orders": serializer.data})
            return Response({"data": "No available orders" })
            
        except CustomerProfile.DoesNotExist:
            return Response({"error": "customer does not exist"}, status=status.HTTP_400_BAD_REQUEST)


class Get_Vendor_Orders(APIView):
    def get(self, request):
        try:
            user = request.user
            vendor = VendorProfile.objects.get(user = user)
            order_items = OrderItem.objects.filter(item__vendor = vendor)
            orders = Order.objects.filter(order_items__in = order_items).distinct()
            
            serializer = OrderSerializer(orders, many=True)
            if orders is not None:
                return Response({"vendor_orders": serializer.data})
            return Response({"data": "No available orders" })
        
        except VendorProfile.DoesNotExist:
            return Response({"error": "vendor does not exist"}, status=status.HTTP_400_BAD_REQUEST)





class Add_To_Order(APIView):

    def post(self, request):
        user = request.user
        customer = CustomerProfile.objects.get(user =user)
        cart = Cart.objects.filter(customer = customer).first()
        items = CartItem.objects.filter(cart = cart)
        
        order_data = {
            'customer': customer.id,
            'total_amount': cart.total_price,
            'customer_name': customer.get_full_name(),
            'order_items': []
        }

        for item in items:
            order_data['order_items'].append({
                'item': item.item.id,
                'item_name': item.item_name,
                'item_price': item.item_price,
                'item_quantity': item.item_quantity,
                'total_price': item.total_price
            })
        
        serializer = OrderSerializer(data=order_data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"success": serializer.data})
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
    def delete(request, item_id = None, order_id = None):
        order_item = OrderItem.objects.get(item = item_id, order = order_id)
        order_item.delete()
        return Response({"success": "item deleted"}, status=status.HTTP_204_NO_CONTENT)
    

class Add_To_Cart(APIView):
        def post(self, request, item_id =None):
            data = request.data
            user = request.user
            customer = CustomerProfile.objects.get(user =user)
            menu_item = MenuItem.objects.get(id = item_id)
            data['item'] = menu_item.id
            data['item_name'] = menu_item.item_name
            cart = Cart.objects.get_or_create(customer = customer)
            
            if isinstance(cart, tuple):
                cart = cart[0]
                data['cart'] = cart.id
            
            item_price = menu_item.item_price
            quantity = data['item_quantity']
            data['item_price'] = item_price
            
            # cart.total_items = CartItem.objects.filter(cart = cart).count()
           
            total_price = int(item_price) * int(quantity)
            data['total_price'] = total_price
            serializer = CartItemSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response({"success": serializer.data})
            return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
            

class ViewCartItems(APIView):
    def get(self, request):
        user = request.user
        customer = CustomerProfile.objects.get(user = user)
        cart = Cart.objects.filter(customer = customer).first()
        if cart is not None:
            cart_items = CartItem.objects.filter(cart = cart).distinct()
            serializer = CartItemSerializer(cart_items, many=True)
            return Response({"cart_items": serializer.data})
        return Response({"message": "no data"})
    

    def put(self, request, item_id = None):
            data = request.data
            user = request.user
            customer = CustomerProfile.objects.get(user = user)
            cart_item = CartItem.objects.get(id = item_id)
            cart = Cart.objects.filter(customer = customer).first()
            data['cart'] = cart.id
            data['item'] = cart_item.id
            data['total_price'] = int(cart_item.item_price) * int(data['item_quantity'])
            serializer = CartItemSerializer(cart_item, data= data)
            
            if serializer.is_valid():
                serializer.save()
                return Response({"data": serializer.data})
            return Response({"error": serializer.errors})
    

    def delete(self, request, item_id = None):
        item = CartItem.objects.get(id = item_id)
        item.delete()
        return Response({"message": "item removed from cart successfully"})
    
    # clear all cart items
    def delete(self, request):
        cart_items = CartItem.objects.all()
        cart_items.delete()
        return Response({"message": "cart cleared successfully"})



class CartView(APIView):
        def get(self, request):
            user = request.user
            customer = CustomerProfile.objects.get(user = user)
            cart = Cart.objects.filter(customer = customer).first()
            cart_items = CartItem.objects.filter(cart = cart).distinct()
            serialized_items = CartItemSerializer(cart_items, many=True)
            items_data = serialized_items.data
            
            total_price = 0
            for item in items_data:
                total_price += int(item['total_price'])


            data = {
                'customer': customer.id,
                'total_items': cart_items.count(),
                'total_price': total_price,
                'cart_items': items_data
            }

            if cart:
                serializer = CartSerializer(cart, data=data)
            else:
                serializer = CartSerializer(data=data)
    
            if serializer.is_valid():
                serializer.save()
                return Response({"data": serializer.data})
            return Response({"error": serializer.errors})
        


# list of all order items



class OrderItemsList(ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderSerializer()
    pagination_class = PageNumberPagination




# list of all orders
class OrderList(ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = PageNumberPagination


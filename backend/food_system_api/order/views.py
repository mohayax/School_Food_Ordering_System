from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import status
from .serializers import OrderSerializer, OrderItemSerializer
from .models import Order, OrderItem
from rest_framework.pagination import PageNumberPagination
from customer.models import CustomerProfile
from customer.serializers import CustomerSerializer
from menu_item.models import MenuItem
from vendor.models import VendorProfile


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
    
    def get(self, request, order_id = None):
        user = request.user
        data = request.data
        customer = CustomerProfile.objects.get(user = user)
        order = Order.objects.get(id = order_id)
        data['id'] = order.id
        data['customer'] = customer.id
        data['customer_name'] = customer.get_full_name()
        order_items = OrderItem.objects.filter(order = order)
        order_item_serializer = OrderItemSerializer(order_items, many=True)
        serialized_order_items = order_item_serializer.data
        data['order_items'] = serialized_order_items
       
        serializer = OrderSerializer(data=request.data)
        
        if serializer.is_valid():
            return Response({"customer_order": serializer.data})
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class Get_Vendor_Orders(APIView):
    def get(self, request):
        try:
            user = request.user
            vendor = VendorProfile.objects.get(user = user)
            order_items = OrderItem.objects.filter(item__vendor = vendor)
            orders = Order.objects.filter(order_items__in = order_items).distinct()
            
            serializer = OrderSerializer(orders, many=True)
            if orders is not None:
                return Response({"vendor_order": serializer.data})
            return Response({"data": "No available orders" })
        
        except VendorProfile.DoesNotExist:
            return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)





class Add_To_Order(APIView):
    # def get(self, request, order_id = None):
    #     if order_id is not None:
    #         item = OrderItem.objects.get(order = order_id)
    #         serializer = OrderItemSerializer(item)
    #         return Response({"data": serializer.data}, status=status.HTTP_200_OK)
    #     return Response({"error": "invalid request"}, status=status.HTTP_400_BAD_REQUEST)
    

    def post(self, request, item_id = None):
        data = request.data
        user = request.user
        customer = CustomerProfile.objects.get(user =user)

        menu_item = MenuItem.objects.get(id = item_id)
        data['item'] = menu_item.id
        data['item_name'] = menu_item.item_name
        order = Order.objects.create(customer = customer )
        data['order'] = order.id
        data['customer_name'] = customer.get_full_name()
        # data['order'] = order.id
        serializer = OrderItemSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": serializer.data})
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(request, item_id = None, order_id = None):
        order_item = OrderItem.objects.get(item = item_id, order = order_id)
        order_item.delete()
        return Response({"success": "item deleted"}, status=status.HTTP_204_NO_CONTENT)


# list of all order items



class OrderItemsList(ListAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    pagination_class = PageNumberPagination




# list of all orders
class OrderList(ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = PageNumberPagination


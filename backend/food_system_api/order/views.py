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
from menu_item.serializers import MenuItemSerializer
from vendor.models import VendorProfile
from django.db.models import Sum
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np


class OrderView(APIView):
    def get(self, request, order_id = None):
        if order_id is not None:
            order = Order.objects.prefetch_related('order_items').get(id = order_id)
            serializer = OrderSerializer(order)
            return Response( serializer.data, status=status.HTTP_200_OK)
        return Response({"invalid request"}, status=status.HTTP_400_BAD_REQUEST)
    


    def put(self, request, order_id = None):
        
        order = Order.objects.get(id = order_id)
        serializer = OrderSerializer(order, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"order details updated successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    def delete(self, request, order_id =None):
        order = Order.objects.get(id = order_id)
        order.delete()
        return Response({"order removed"},status=status.HTTP_204_NO_CONTENT)


# customer order
class Get_Customer_Order(APIView):
    
    def get(self, request):
        try:
            user = request.user
            customer = CustomerProfile.objects.get(user = user)
            orders = Order.objects.filter(customer = customer).distinct()
            [order.order_date.date() for order in orders]

            serializer = OrderSerializer(orders, many=True)
            if orders is not None:
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({"No available orders" }, status=status.HTTP_200_OK)
            
        except CustomerProfile.DoesNotExist:
            return Response({"customer does not exist"}, status=status.HTTP_400_BAD_REQUEST)


class Get_Vendor_Orders(APIView):
    def get(self, request):
        try:
            user = request.user
            vendor = VendorProfile.objects.get(user = user)
            order_items = OrderItem.objects.filter(item__vendor = vendor)
            orders = Order.objects.filter(order_items__in = order_items).distinct()
            
            serializer = OrderSerializer(orders, many=True)
            if orders is not None:
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({"No available orders" }, status=status.HTTP_200_OK)
        
        except VendorProfile.DoesNotExist:
            return Response({"vendor does not exist"}, status=status.HTTP_400_BAD_REQUEST)





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
            'customer_phone_number': customer.phone_number,
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
            return Response({"items added successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
    def delete(request, item_id = None, order_id = None):
        order_item = OrderItem.objects.get(item = item_id, order = order_id)
        order_item.delete()
        return Response({"Item removed"}, status=status.HTTP_204_NO_CONTENT)
    

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
                return Response({"Item added successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            

class ViewCartItems(APIView):
    def get(self, request):
        user = request.user
        customer = CustomerProfile.objects.get(user = user)
        cart = Cart.objects.filter(customer = customer).first()
        if cart is not None:
            cart_items = CartItem.objects.filter(cart = cart).distinct()
            serializer = CartItemSerializer(cart_items, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No Items"}, status=status.HTTP_200_OK)
    

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
                return Response({"Item updated Successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def delete(self, request, item_id = None):
        item = CartItem.objects.get(id = item_id)
        item.delete()
        return Response({"item removed!"}, status=status.HTTP_204_NO_CONTENT)
    
    # clear all cart items
    def delete(self, request):
        user = request.user
        customer = CustomerProfile.objects.get(user = user)
        cart = Cart.objects.filter(customer = customer).first()
        cart_items = CartItem.objects.filter(cart = cart)
        cart_items.delete()
        cart.total_items = 0
        cart.total_price = 0
        cart.save()
        return Response({"cart cleared successfully"}, status=status.HTTP_204_NO_CONTENT)



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
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        


# list of all order items



# class OrderItemsList(ListAPIView):
#     queryset = OrderItem.objects.all()
#     serializer_class = OrderSerializer()
#     pagination_class = PageNumberPagination




# list of all orders
# class OrderList(ListAPIView):
#     queryset = Order.objects.all()
#     serializer_class = OrderSerializer
#     pagination_class = PageNumberPagination



#Recommendations

def getRecommedations(user):
    last_order = Order.objects.filter(user=user).order_by('-order_date').first()
    if not last_order:
        return False

    # Get descriptions of the items in the last order
    last_order_descriptions = [item.description for item in last_order.order_items.all()]

    # Get all menu items and their descriptions
    all_menu_items = MenuItem.objects.all()
    all_descriptions = [item.description for item in all_menu_items]

    # Combine descriptions for tf-idf
    combined_descriptions = last_order_descriptions + all_descriptions

    # Create a TF-IDF Vectorizer specifying English stop words
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform(combined_descriptions)

    # Compute cosine similarity
    cosine_sim = cosine_similarity(tfidf_matrix)

    # Get similarity scores for the last order items against all items
    last_order_indices = list(range(len(last_order_descriptions)))
    all_item_indices = list(range(len(last_order_descriptions), len(combined_descriptions)))

    # Average similarity scores for each item in the menu
    similarity_scores = np.mean(cosine_sim[last_order_indices][:, all_item_indices], axis=0)

    # Get top N recommendations (excluding already ordered items)
    ordered_item_ids = [item.id for item in last_order.menu_items.all()]
    menu_items_with_scores = [
        (all_menu_items[i - len(last_order_descriptions)], score) 
        for i, score in enumerate(similarity_scores) if all_menu_items[i - len(last_order_descriptions)].id not in ordered_item_ids
    ]
    menu_items_with_scores.sort(key=lambda x: x[1], reverse=True)

    return [item[0] for item in menu_items_with_scores[:5]]  # Return top 5 recommendations



class RecommendationsView(APIView):
    def get(self, request):
        user = request.user
        recommendations = getRecommedations(user)
        if recommendations:
            serializer = MenuItemSerializer(recommendations, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No items"}, status=status.HTTP_204_NO_CONTENT)
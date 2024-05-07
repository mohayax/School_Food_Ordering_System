from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import status
from .serializers import OrderSerializer
from .models import Order
from rest_framework.pagination import PageNumberPagination
from customer.models import CustomerProfile


class OrderView(APIView):

    def post(self, request):
        data = request.data
        user = request.user
        customer = CustomerProfile.objects.get(user = user)
        data['customer'] = customer.id
        data['customer_name'] = customer.get_full_name()
        
        serializer = OrderSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


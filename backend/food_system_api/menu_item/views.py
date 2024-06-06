from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import status
from .serializers import MenuItemSerializer
from .models import MenuItem
from rest_framework.pagination import PageNumberPagination
from vendor.models import VendorProfile

# Create your views here.


class MenuItemView(APIView):

    def post(self, request):
        user = request.user
        vendor = VendorProfile.objects.get(user = user)
        request.data['vendor'] = vendor.id
        serializer = MenuItemSerializer(data=request.data)
        
        if vendor:
            if serializer.is_valid():
                serializer.save()
                return Response({'success': 'Item added successfully'}, status=status.HTTP_201_CREATED) 
            return Response({'error': serializer.errors}, status = status.HTTP_400_BAD_REQUEST)
        return Response({'no data'})

    def get(self, request, id = None):
        if id is not None:
            item = MenuItem.objects.get(id = id)
            serializer = MenuItemSerializer(item)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response("invalid request", status=status.HTTP_400_BAD_REQUEST)



    def put(self, request, id = None):
        user = request.user
        vendor = VendorProfile.objects.get(user = user)
        request.data['vendor'] = vendor.id

        if id is not None:

            item = MenuItem.objects.get(id = id)
            serializer = MenuItemSerializer(item, data=request.data)
            if  serializer.is_valid():
                serializer.save()
                return Response({"success": "item updated successfully"}, status=status.HTTP_200_OK)
            return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"error": "invalid request"}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id = None):
        item = MenuItem.objects.get(id = id)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class GetVendorItems(APIView):

    def get(self, request, id = None):
        vendor = VendorProfile.objects.get(id = id)
        if vendor is not None:
            items = MenuItem.objects.filter(vendor = vendor)
            serializer = MenuItemSerializer(items, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"Vendor not found"}, status=status.HTTP_204_NO_CONTENT)


class MenuItems(ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    pagination_class = PageNumberPagination


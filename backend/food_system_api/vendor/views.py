from rest_framework.response import Response
from rest_framework.views import APIView, ListAPIView, RetrieveAPIView
from rest_framework import permissions
from rest_framework import status
from .serializers import VendorSerializer
from .models import VendorProfile
from rest_framework.pagination import PageNumberPagination

# Create your views here.

class VendorProfileView(APIView):
   
   def get(self, request, id = None):
      if id is not None:
        vendor = VendorProfile.objects.get(id = id)
        serializer = VendorSerializer(vendor)
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)

   
   def post(self, request):
      serializer = VendorSerializer(data= request.data)
      if serializer.is_valid():
         serializer.save()
         return Response({'success': 'vendor profile created successfully'}, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
   
   def put(self, request, id = None):
      vendor = VendorProfile.objects.get(id = id)
      serializer = VendorSerializer(vendor, data=request.data)

      if serializer.is_valid():
         serializer.save()
         return Response({'success': 'vendor details updated successfully'}, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
   def delete(self, request, id = None):
      vendor = VendorProfile.objects.get(id = id)
      vendor.delete()
      return Response({"message": "No data"}, status=status.HTTP_204_NO_CONTENT)
   


class VendorsView(ListAPIView):
   queryset = VendorProfile.objects.all()
   serializer_class = VendorSerializer
   pagination_class  = PageNumberPagination

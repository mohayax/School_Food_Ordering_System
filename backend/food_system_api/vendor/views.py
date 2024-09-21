from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import status
from .serializers import VendorSerializer
from .models import VendorProfile
from rest_framework.pagination import PageNumberPagination
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your views here.

class VendorProfileView(APIView):
   permission_classes = (permissions.AllowAny, )
   
   def post(self, request):
      data = request.data
      email = data['email']
      try:
         user_accout = User.objects.get(email = email)
      except User.DoesNotExist:
         return Response({"no user found with the given email"}, status=status.HTTP_400_BAD_REQUEST )   
      
      serializer = VendorSerializer(data= request.data)
      if serializer.is_valid():
         serializer.save(user = user_accout)
         return Response({'Customer profile created successfully'}, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      

      

   # def delete(self, request, id = None):
   #    vendor = VendorProfile.objects.get(id = id)
   #    vendor.delete()
   #    return Response({"message": "No data"}, status=status.HTTP_204_NO_CONTENT)
   

class VendorProfileAction(APIView):

   def get(self, request):
      user = request.user
      try:
         vendor = VendorProfile.objects.get(user = user)
         serializer = VendorSerializer(vendor)
         return Response(serializer.data, status=status.HTTP_200_OK)
      except VendorProfile.DoesNotExist:
         return Response({"vendor data not found"}, status=status.HTTP_404_NOT_FOUND)
      
   def put(self, request):
      user = request.user
      vendor = VendorProfile.objects.get(user = user)
      serializer = VendorSerializer(vendor, data=request.data, partial=True)

      if serializer.is_valid():
         serializer.save()
         return Response({'vendor details updated successfully'}, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
         
class VendorCustomerView(APIView):
   def get(self, request, id = None):
      try:
         vendor = VendorProfile.objects.get(id = id)
         serializer = VendorSerializer(vendor)
         return Response(serializer.data, status=status.HTTP_200_OK)
      except VendorProfile.DoesNotExist:
         return Response({"vendor data not found"}, status=status.HTTP_404_NOT_FOUND)


class VendorsView(ListAPIView):
   queryset = VendorProfile.objects.all()
   serializer_class = VendorSerializer
   pagination_class  = PageNumberPagination

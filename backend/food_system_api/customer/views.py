from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from .serializers import CustomerSerializer
from .models import CustomerProfile
from django.contrib.auth import get_user_model
User = get_user_model()



# Create your views here.

class CustomerProfileView(APIView):
   permission_classes = (permissions.AllowAny, )

   def post(self, request):
      data = request.data
      email = data['email']
      try:
         user_accout = User.objects.get(email = email)
      except User.DoesNotExist:
         return Response({"no user found with the given email"}, status=status.HTTP_400_BAD_REQUEST )   
      
      serializer = CustomerSerializer(data= request.data)
      if serializer.is_valid():
         serializer.save(user = user_accout)
         return Response({'Customer profile created successfully'}, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
   
   
   
#    def delete(self, request, id = None):
#       vendor = CustomerSerializer.objects.get(id = id)
#       vendor.delete()
#       return Response({"message": "No data"}, status=status.HTTP_204_NO_CONTENT)

class CustomerProfileAction(APIView):

   def get(self, request):
      user = request.user

      try:
         customer = CustomerProfile.objects.get(user = user)
         serializer = CustomerSerializer(customer)
         return Response(serializer.data, status=status.HTTP_200_OK)
      except CustomerProfile.DoesNotExist:
         return Response({"customer data not found"}, status=status.HTTP_404_NOT_FOUND)
      
   
   
   def put(self, request):
      user = request.user
      customer = CustomerProfile.objects.get(user = user)
      serializer = CustomerSerializer(customer, data=request.data)

      if serializer.is_valid():
         serializer.save()
         return Response({'details updated successfully'}, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   
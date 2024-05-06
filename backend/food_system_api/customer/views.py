from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from .serializers import CustomerSerializer
from .models import CustomerProfile



# Create your views here.

class CustomerProfileView(APIView):

   def get(self, request, id = None):
      if id is not None:
        customer = CustomerProfile.objects.get(id = id)
        serializer = CustomerSerializer(customer)
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)

   
   def post(self, request):
      user_accout = request.user
      
      serializer = CustomerSerializer(data= request.data)
      if serializer.is_valid():
         serializer.save(user = user_accout)
         return Response({'success': 'profile created successfully'}, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
   
   def put(self, request, id = None):
      
      customer = CustomerProfile.objects.get(id = id)
      serializer = CustomerSerializer(customer, data=request.data)

      if serializer.is_valid():
         serializer.save()
         return Response({'success': 'details updated successfully'}, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
#    def delete(self, request, id = None):
#       vendor = CustomerSerializer.objects.get(id = id)
#       vendor.delete()
#       return Response({"message": "No data"}, status=status.HTTP_204_NO_CONTENT)
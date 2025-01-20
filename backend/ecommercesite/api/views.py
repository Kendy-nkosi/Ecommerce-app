from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.



def products_list(request):
   products = [{"id": 1, "name": "Product 1", "price": 10}]
   return JsonResponse(products, safe=False)

def users_list(request):
   users = [{"id": 1, "name": "user1"}]
   return JsonResponse(users, safe=False)
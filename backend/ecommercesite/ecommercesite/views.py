from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    return JsonResponse({"message": "Welcome to the ecommerce API"}, status=200)

def products_list(request):
    products = [{"id": 1, "name": "Product 1", "price": 10}]
    return JsonResponse(products, safe=False)

@csrf_exempt #Use this only for development, for production use proper method of handling CSRF.
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            
            if User.objects.filter(email=email).exists():
                return JsonResponse({"message": "Email already exists"}, status=400)
            
            user = User.objects.create_user(
                username=email,  # Using email as username
                email=email,
                password=password
            )
            return JsonResponse({"message": "User created successfully"}, status=201)
            
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse({"message": "Invalid Request"}, status=400)

@csrf_exempt #Use this only for development, for production use proper method of handling CSRF.
def login_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return JsonResponse({"message": "User logged in successfully"}, status=200)
            else:
                return JsonResponse({"message": "Invalid credentials"}, status=400)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse({"message": "Invalid Request"}, status=400)

def logout_user(request):
    logout(request)
    return JsonResponse({"message": "User logged out successfully"}, status=200)
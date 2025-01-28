from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login

@csrf_exempt
@api_view(['POST'])
def register_user(request):
    try:
        data = request.data
        username = data.get('email')
        password = data.get('password')
        
        if User.objects.filter(username=username).exists():
            return Response({'message': 'User already exists'}, status=400)
            
        user = User.objects.create_user(username=username, password=password)
        return Response({'message': 'User created successfully'}, status=201)
    except Exception as e:
        return Response({'message': str(e)}, status=400)

@csrf_exempt
@api_view(['POST'])
def login_user(request):
    try:
        data = request.data
        username = data.get('email')
        password = data.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=200)
        else:
            return Response({'message': 'Invalid credentials'}, status=401)
    except Exception as e:
        return Response({'message': str(e)}, status=400)

# Create your views here.

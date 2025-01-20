from django.urls import path
from . import views

urlpatterns = [
   path("products", views.products_list, name="products"),
   path('users', views.users_list, name="users"),
 ]
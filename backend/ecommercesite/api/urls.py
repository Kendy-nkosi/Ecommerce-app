from django.urls import path
from . import views

urlpatterns = [
  path("products", views.products_list, name="products"),
  path('users', views.User, name="users"),
  path('register', views.register_user, name="register"), # new url for register
  path('login', views.login_user, name='login'), # new url for login
  path('logout', views.logout_user, name='logout'), # new url for logout
  path('checkout', views.checkout, name="checkout")
]
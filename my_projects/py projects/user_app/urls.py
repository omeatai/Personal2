from django.urls import path
from . import views

urlpatterns = [
    path('', views.members, name='members'),
    path('register', views.register, name='register'),
]

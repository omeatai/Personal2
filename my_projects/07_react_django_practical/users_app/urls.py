from django.urls import path
from . import views

urlpatterns = [
    # path('', views.users, name='users'),
    path('users', views.UserGenericAPIView.as_view(), name='users'),
    path('users/<str:pk>', views.UserGenericAPIView.as_view(), name='users-detail'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),
]

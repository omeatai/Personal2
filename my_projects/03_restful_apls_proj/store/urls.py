from django.urls import path
from . import views
from . import api_views

urlpatterns = [
    path('', views.index, name='list-products'),
    path('products/<int:id>/', views.show, name='show-product'),
    path('cart/', views.cart, name='shopping-cart'),
    path('api/v1/products/', api_views.ProductList.as_view()),
    path('api/v1/products/new', api_views.ProductCreate.as_view()),
    path('api/v1/products/<int:id>/destroy',
         api_views.ProductDestroy.as_view()),
    path('api/v1/products/<int:id>/',
         api_views.ProductRetrieveUpdateDestroy.as_view()),
    path('api/v1/products/<int:id>/stats',
         api_views.ProductStats.as_view(),
         ),
]

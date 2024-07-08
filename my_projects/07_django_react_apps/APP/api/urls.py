from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('packages', views.PackageViewSet, basename='packages')
router.register('wishlist', views.WishlistItemViewSet, basename='wishlist')
router.register('public/packages', views.PublicPackageViewSet, basename="public-packages")
router.register('bookings', views.BookingViewSet, basename='bookings')

urlpatterns = [
    path('', include(router.urls)),
    path('users/', views.UserList.as_view()),
    path('users/<pk>/', views.UserDetails.as_view()),
]

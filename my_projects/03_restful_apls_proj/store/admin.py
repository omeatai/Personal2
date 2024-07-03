from django.contrib import admin
from .models import Product, ShoppingCart, ShoppingCartItem


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price',
                    'sale_start', 'sale_end', 'photo', 'is_on_sale', 'get_rounded_price', 'current_price')


class ShoppingCartAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'subtotal', 'taxes', 'total')


class ShoppingCartItemAdmin(admin.ModelAdmin):
    list_display = ('shopping_cart', 'product', 'quantity', 'total')


admin.site.register(Product, ProductAdmin)
admin.site.register(ShoppingCart, ShoppingCartAdmin)
admin.site.register(ShoppingCartItem, ShoppingCartItemAdmin)

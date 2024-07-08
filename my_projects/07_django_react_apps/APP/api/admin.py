from django.contrib import admin

from api.models import Package, WishlistItem, Booking, PackagePermission

class PackagePermissionInline(admin.TabularInline):
    model = PackagePermission

class PackageAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', 'price', 'rating', 'tour_length', 'start')
    inlines = (PackagePermissionInline,)

admin.site.register(Package, PackageAdmin)
admin.site.register(WishlistItem)
admin.site.register(Booking)

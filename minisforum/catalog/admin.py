from django.contrib import admin
from .models import Product
from .models import Review

class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'product_name', 'category', 'price', 'kolvo', 'in_stock', 'rating', 'date_added')
    search_fields = ('product_name', 'category')
    list_filter = ('category', 'in_stock')
    ordering = ('product_id',)

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'user_username', 'feedback', 'rating', 'date_added', 'is_approved')
    search_fields = ('user_username',)
    list_filter = ('rating', 'is_approved')
    ordering = ('product_id',)


admin.site.register(Product, ProductAdmin)
admin.site.register(Review, ReviewAdmin)
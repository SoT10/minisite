from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'product_name', 'category', 'price', 'kolvo', 'in_stock', 'rating', 'date_added')
    search_fields = ('product_name', 'category')
    list_filter = ('category', 'in_stock')
    ordering = ('product_id',)

admin.site.register(Product, ProductAdmin)
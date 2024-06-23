from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'status', 'total', 'date')
    list_filter = ('status', 'date')
    search_fields = ('first_name', 'last_name', 'email')
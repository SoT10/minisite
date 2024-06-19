from django.urls import path

from catalog import views
from . import views

app_name = 'catalog'

urlpatterns = [
    path('', views.catalog, name='catalog'),
    path('product', views.product, name='product'),
    path('add_to_favorites', views.add_to_favorites, name='add_to_favorites'),
]

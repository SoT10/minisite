"""
URL configuration for minisforum project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from home.views import home
from about.views import about
from blog.views import blog
from catalog.views import catalog
from contact.views import contact
from my_accaunt.views import my_accaunt
from cart.views import cart
from buy.views import buy

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls'), name='home'),
    path('about/', include('about.urls'), name='about'),
    path('blog/', include('blog.urls'), name='blog'),
    path('catalog/', include('catalog.urls'), name='catalog'),
    path('contact/', include('contact.urls'), name='contact'),
    path('my_accaunt/', include('my_accaunt.urls'), name='my_accaunt'),
    path('cart/', include('cart.urls'), name='cart'),
    path('buy/', include('buy.urls'), name='buy'),
    path('add_to_favorites', views.add_to_favorites, name='add_to_favorites'),
    path('get_json_from_storage', views.get_json_from_storage, name='get_json_from_storage'),

    
    # path('set_cookie/', views.set_cookie_view),
    # path('get_cookie/', views.get_cookie_view),
    # path('delete_cookie/', views.delete_cookie_view),
]

from django.urls import path
from django.contrib.auth import views as auth_views

from my_accaunt import views

app_name = 'my_accaunt'

urlpatterns = [
    path('', views.my_accaunt, name='my_accaunt'),
    path('logout/', auth_views.LogoutView.as_view(next_page='/my_accaunt'), name='logout'),
]

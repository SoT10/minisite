from django.urls import path

from my_accaunt import views

app_name = 'my_accaunt'

urlpatterns = [
    path('', views.my_accaunt, name='my_accaunt'),
]

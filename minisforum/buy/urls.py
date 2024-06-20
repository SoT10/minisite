from django.urls import path

from buy import views

app_name = 'buy'

urlpatterns = [
    path('', views.buy, name='buy'),
]

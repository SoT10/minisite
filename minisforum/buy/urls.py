from django.urls import path

from buy import views

app_name = 'buy'

urlpatterns = [
    path('', views.buy, name='buy'),
    path('get_json_from_storage', views.buy, name='get_json_from_storage')
]

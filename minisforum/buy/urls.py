from django.urls import path

from buy import views

app_name = 'buy'

urlpatterns = [
    path('', views.buy, name='buy'),
    path('get_json_from_storage', views.get_json_from_storage, name='get_json_from_storage'),
    path('clear_storage_data', views.clear_storage_data, name='clear_storage_data'),
]

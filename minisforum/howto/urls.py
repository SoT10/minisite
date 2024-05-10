from django.urls import path

from howto import views

app_name = 'howto'

urlpatterns = [
    path('', views.howto, name='howto'),
]

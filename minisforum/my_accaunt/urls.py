from django.urls import include, path
from django.contrib.auth import views as auth_views

from my_accaunt import views

app_name = 'my_accaunt'

urlpatterns = [
    path('', views.my_accaunt, name='my_accaunt'),
    path('logout/', auth_views.LogoutView.as_view(next_page='/my_accaunt'), name='logout'),
    path('user_agreement', views.user_agreement, name='user_agreement'),
    path('privacy_policy', views.privacy_policy, name='privacy_policy'),
    path('view_order', views.view_order, name='view_order'),
]
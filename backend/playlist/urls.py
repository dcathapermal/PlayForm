from django.urls import path, include
import playlist.views as views
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('songsearch', views.songSearch),
    path('playlist', views.addToPlaylist),
    path('login', obtain_auth_token, name='api_token_auth'),
    path('getList', views.returnPlaylist),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]

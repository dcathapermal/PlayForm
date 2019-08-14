from django.urls import path
import playlist.views as views
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('songsearch', views.songSearch),
    path('songlist', views.songlist),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]
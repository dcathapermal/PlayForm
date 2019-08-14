from django.urls import path
import playlist.views as views
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('songsearch', views.songSearch),
    path('songlist', views.songlist),
]
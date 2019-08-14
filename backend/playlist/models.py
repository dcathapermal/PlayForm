from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Song(models.Model):
    name = models.TextField()
    url = models.TextField()

class Playlist(models.Model):
    songs = models.ManyToManyField(Song)

class UserSettings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    playlist = models.ManyToManyField(Playlist) 

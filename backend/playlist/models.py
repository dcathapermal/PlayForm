from django.db import models

# Create your models here.

class Song(models.Model):
    name = models.TextField(default = "")
    code = models.TextField(default = "")

class Playlist(models.Model):
    user = models.TextField(default = "")
    name = models.TextField(default = "")
    songs = models.ManyToManyField(Song)

# class UserSettings(models.Model):
#     # user = models.OneToOneField(User, on_delete=models.CASCADE)
#     user = models.TextField(default = "")
#     playlists = models.ManyToManyField(Playlist) 

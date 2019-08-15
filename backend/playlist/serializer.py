from rest_framework import serializers
from playlist.models import Song, Playlist

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['name', 'code']

class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ['songs']

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserSettings
#         fields = ['user', 'playlists']
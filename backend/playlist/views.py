from django.shortcuts import render
from playlist.models import Song, Playlist
import requests, time
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from bs4 import BeautifulSoup as bs
import requests
from playlist.serializer import SongSerializer, PlaylistSerializer
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
@csrf_exempt
def songSearch(request):
    query = request.GET.get("query", "")
    base = "https://www.youtube.com/results?search_query="
    r = requests.get(base+query)
    page = r.text
    soup=bs(page,'html.parser')
    vids = soup.findAll('a',attrs={'class':'yt-uix-tile-link'})
    songlist=[]

    for v in vids:
        code = v['href'][9:]
        name = v['title']
        song = {
            'code': code,
            'name': name
        }
        if len(code) == 11:
            songlist.append(song)
    serializer = SongSerializer(songlist, many=True)
    print(serializer.data)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def addToPlaylist(request):
    data = json.loads(request.body.decode('utf-8'))
    song = Song.objects.create(name=data['name'], code=data['code'])

    playlist, created = Playlist.objects.get_or_create(name = data['playlist_name'], user = str(data['user_token']))
    playlist.songs.add(song)
    playlist.save()
    # except Playlist.DoesNotExist:
    #     playlist = Playlist.objects.create(name = name, user = str(data['user_token']))
    # user_settings.playlists.addPlaylist

    # userSerialized = UserSerializer(user_settings)

    # userdata = dict(userSerialized.data)
    # playlists = userdata['playlists']
    # if 'default' in playlists:
    #     playlists['default'].append(song)
    # else:

    # user_settings.save()

    # playlistSerialized = PlaylistSerializer(data=song)
    # if playlistSerialized.is_valid():
    #     playlistSerialized.save()
    
    

    # return JsonResponse(playlistSerialized.data, safe=False)
    return HttpResponse('song saved to playlist', status =200)

@csrf_exempt
def returnPlaylist(request):
    user = request.GET.get("user", "")
    name = request.GET.get("name", "")
    try:
        playlist = Playlist.objects.get(user = user, name = name)
        # print(list(playlist.songs.all())) 
        serializedSongs = SongSerializer(list(playlist.songs.all()), many=True)
        print(serializedSongs.data)
        return JsonResponse(serializedSongs.data, safe = False)
        # return JsonResponse(serializedSongs, safe = False)
    except Playlist.DoesNotExist:
        return HttpResponse('Erreur', status = 400)
from django.shortcuts import render
from playlist.models import Song, Playlist, UserSettings
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
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def playlist(request):
    data = json.loads(request.body.decode('utf-8'))
    song, song_created = Song.objects.get_or_create(name=data['name'], code=data['code'])
    song.save()

    if song_created:
        user_settings, created = UserSettings.objects.get_or_create(user = data['user_token'])
        user_settings.playlist.add(song)
        user_settings.save()

    return HttpResponse('song saved to playlist', status =200)

def addtoPlaylist(request):
    return redirect('PlayList.html')





from django.shortcuts import render
from playlist.models import Song, Playlist
import requests, time
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from bs4 import BeautifulSoup as bs
import requests
from playlist.classes import SongData
from playlist.serializer import SongSerializer, PlaylistSerializer


# Create your views here.

def songSearch(request):
    base = "https://www.youtube.com/results?search_query="
    q = request.GET.get('song_search', '')
    r = requests.get(base+q)
    page = r.text
    soup=bs(page,'html.parser')
    vids = soup.findAll('a',attrs={'class':'yt-uix-tile-link'})
    videolist=[]

    for v in vids:
        url = 'https://www.youtube.com' + v['href']
        title = v['title']
        videoData = SongData(title, url)
        if len(url) == 43:
            videolist.append(videoData)

    return render(request, 'searchResult.html',  context = {"videolist": videolist})

# @login_required(redirect_field_name='songlist')
def songlist(request):
    return render(request, 'PlayList.html')

def addtoPlaylist(request):
    return redirect('PlayList.html')


def login(request):
    request.user



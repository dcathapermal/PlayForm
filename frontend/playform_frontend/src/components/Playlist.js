import React, {useState} from 'react';
import Player from './Player'

function Playlist(props){
    const [playlist, setPlaylist] = useState([])
    const [playlistName, setPlaylistName] = useState("")
    
    const handleSubmit=()=>{
        props.djangoService.get_playlist('default').then((response)=> {
            setPlaylist(response.data);
        })}

    return(
        <div>
            <h1>Playlist</h1>
            <form>
                <select onChange= {(e)=> setPlaylistName(e.target.value)}>
                    <option>Playlist 1</option>
                </select>
            </form>
            <button onClick = {handleSubmit}>Retrieve Playlist</button>
            {playlist.map((item, index) => (
                <div key={index}>
                    <a href={`https://www.youtube.com/watch?v=${item.code}`}>{item.name}</a>
                    <br />
                    <br />

                </div>
            ))}
        <Player list={playlist} />
     </div>
    )
}
//to make multiple playlists change default

export default Playlist


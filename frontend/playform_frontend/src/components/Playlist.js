import React, {useState} from 'react';



function Playlist(props){
    const [playlist, setPlaylist] = useState([])
    const handleSubmit=()=>{
        props.djangoService.get_playlist('default').then((response)=> {
            console.log(response.data);
            setPlaylist(response.data);
        })}

    return(
        <div>
            <h1>Playlist</h1>
            <button onClick = {handleSubmit}>Retrieve Playlist</button>
            {playlist.map((item, index) => (
                <div key={index}>
                    {console.log(item)}
                    <a href={`https://www.youtube.com/watch?v=${item.code}`}>{item.name}</a>
                    <br />
                    <br />
                </div>
            ))}
     </div>
    )
}
//to make multiple playlists change default

export default Playlist


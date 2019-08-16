import React, {useState} from 'react';
import ReactPlayer from 'react-player'

function Player(props){
    
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  
  // const handleSubmit=()=>{
  //     props.djangoService.get_playlist('default').then((response)=> {
  //         setPlaylist(response.data);
  //     })}
   


    return (
      <div>
        {props.list.length > 0
        ?
        <div>
        <button onClick={(e) => setPlaying(true)}>
          Play
        </button>
        <button onClick={(e) => setCurrentSong((((currentSong - 1) % props.list.length) +props.list.length) % props.list.length)}>Back</button>
        <button onClick={(e) => setCurrentSong((currentSong + 1) % props.list.length)}>Skip</button>
        </div>
        :
        null
        }
        
        {playing && props.list.length > 0
          ?
          <ReactPlayer controls={true}
          url={`https://www.youtube.com/watch?v=${props.list[currentSong].code}}`}
          onEnded={() => setCurrentSong((currentSong + 1) % props.list.length)}
          playing />
          : 
          null
        }
      </div>
    )
}

export default Player;
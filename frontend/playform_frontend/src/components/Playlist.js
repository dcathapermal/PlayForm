import React, {useState} from 'react';
import {Button, Container, Input, FormControl, Box, Link, InputLabel, Grid, Typography, Select,Results, IconButton, MenuItem} from '@material-ui/core';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import { borders } from '@material-ui/system';
import Menu from '@material-ui/icons/Menu';
import ViewList from '@material-ui/icons/ViewList';
import Player from './Player'

function Playlist(props){
    const [playlist, setPlaylist] = useState([])
    const [playlistName, setPlaylistName] = useState("")
    
    const handleSubmit=()=>{
        props.djangoService.get_playlist('default').then((response)=> {
            setPlaylist(response.data);
        })}

    function handleChange(event) {
        setPlaylistName(event.target.value)
    }
    
    return(
        <Container>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems={playlist.length > 0 ? "flex-start" : "center"}
                justify="center" 
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12}>
                <FormControl>
                    <InputLabel htmlFor="playlist">Select Playlist</InputLabel>
                    <Select
                    value={playlistName}
                    onChange={handleChange}
                    style={{width: 600}}
                    id='playlist'
                    >
                        <MenuItem value="default">default</MenuItem>
                    </Select>
                </FormControl>
                    <IconButton onClick={handleSubmit}>
                        <ViewList /> 
                    </IconButton>
                    <IconButton onClick={props.drawer()}>
                        <Menu />
                    </IconButton>
                </Grid>
                <br /> 

                {playlist.map((item, index) => (
                    <Grid key={index} item xs={12}>
                        <Typography>
                            <Link href={`https://www.youtube.com/watch?v=${item.code}`}>{item.name}</Link>
                        </Typography>
                    </Grid>
                ))}

                <Grid item xs={12}>
                    <Player list={playlist} />
                </Grid>
            </Grid>
        </Container>
    //     <div>
    //         <h1>Playlist</h1>
    //         <form>
    //             <select onChange= {(e)=> setPlaylistName(e.target.value)}>
    //                 <option>Playlist 1</option>
    //             </select>
    //         </form>
    //         <button onClick = {handleSubmit}>Retrieve Playlist</button>
    //         {playlist.map((item, index) => (
    //             <div key={index}>
    //                 <a href={`https://www.youtube.com/watch?v=${item.code}`}>{item.name}</a>
    //                 <br />
    //                 <br />

    //             </div>
    //         ))}
    //     <Player list ={playlist} />
    //  </div>
    )
}
//to make multiple playlists change default

export default Playlist


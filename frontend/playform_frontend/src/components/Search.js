import React, {useState} from 'react';
import {Button, Container, Input, FormControl, Box, Link, InputLabel, Grid, Typography, Paper,InputBase, IconButton} from '@material-ui/core';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import { borders } from '@material-ui/system';
import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


function Search(props){

    const [query, setQuery]=useState("");
    const [results, setResults] = useState([]);
    const [added, setAdded] = useState([]);
    const handleSubmit=(e)=>{
        props.djangoService.song_search(query).then((response)=> {
            setResults(response.data);
            setAdded(new Array(response.data.length).fill(false));
        });
    }

    const addHandler = (item, index) => {
        props.djangoService.addToPlaylist(item, 'default');
        var clone = added.slice(0)
        clone[index] = true
        setAdded(clone);
    }

    return(
        <Container>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems={results.length > 0 ? "flex-start" : "center"}
                justify="center" 
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12}>
                    <Input
                    placeholder = "Search"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    style={{width: 600}} />
                    <IconButton onClick={handleSubmit}>
                        <SearchIcon /> 
                    </IconButton>
                    <IconButton onClick={props.drawer()}>
                        <Menu />
                    </IconButton>
                </Grid>
                <br /> 

                {results.map((item, index) => (
                    <Grid key={index} item xs={12}>
                        <Typography>
                            <IconButton onClick={() => addHandler(item, index)}>
                                {added[index] ? <PlaylistAddCheck style={{color:"#00bf8f"}} /> : <PlaylistAdd style={{color:"#000"}} />}
                            </IconButton>
                            <Link href={`https://www.youtube.com/watch?v=${item.code}`}>{item.name}</Link>
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Search

//testuser1
//Parsec1998
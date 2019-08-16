import React, { useState } from 'react';
import { Container, Paper, Typography, Tab, Tabs, Button, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import Search from './Search';
import Logout from './Logout';
import Playlist from './Playlist';
import Menu from '@material-ui/icons/Menu';

function Home(props){
    const [state, setState] = useState(0); 
    const [open, setOpen] = useState(false);

    const handleChange = (text) => {
        setOpen(false);
        if (text == "Search") {
            setState(0);
        } else if (text == "Play") {
            setState(1);
        } else {
            props.djangoService.logout() 
            props.setAuthenticated(false);
        }
    }

    const toggleDrawer = (openArg) => event => {
        console.log("hello");
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(openArg);
  };

    return (
        <Container>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <List> 
                    {['Search', 'Play', 'Log Out'].map((text, index) => (
                    <ListItem button key={text} onClick={() => handleChange(text)}>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
            {
                state ?
                <Playlist djangoService = {props.djangoService} drawer={() => toggleDrawer(true)} />
                :
                <Search djangoService = {props.djangoService} drawer={() => toggleDrawer(true)} />
            }
        </Container>
    )
}

export default Home;
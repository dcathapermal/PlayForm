import React, { useState } from 'react';
import {Button, Container, Input, FormControl, InputLabel, Grid, Typography} from '@material-ui/core';
import Person from '@material-ui/icons/Person';

const Login=(props) => {

    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");

    const handleSubmit=(event) => {
        event.preventDefault()
        props.djangoService.login(userName, password).then(() => {
            props.setAuthenticated(true);
        })
    }

    return(
        <Container>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Person style={{width:"40", height:"40"}}/>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4">Sign In</Typography> 
                </Grid>

                <br />
                <Grid item xs={12}>
                    <FormControl style={{width: 400}}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            id="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <br />
                <Grid item xs={12}>
                <FormControl style={{width: 400}}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                </FormControl>
               </Grid>
               <br/>
               <Grid item xs={12}>
               <Button style={{marginRight: 50}} onClick={() => props.setSignUp(true)}>Register</Button>
               <Button style={{backgroundColor: "#00bf8f", color: "#fff"}} variant="contained"  onClick={handleSubmit}>Login</Button>
               </Grid>
            </Grid>
        </Container>
    )
} 

export default Login;

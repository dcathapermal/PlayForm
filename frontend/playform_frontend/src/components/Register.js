import React, { useState } from 'react';
import {Button, Container, Input, FormControl, InputLabel, Grid, Typography} from '@material-ui/core';
import PersonAdd from '@material-ui/icons/PersonAdd';

const Register=(props) => {

    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const [password2, setPassword2]=useState("");
    const [error, setError]=useState("");

    const handleSubmit=(event) => {
        event.preventDefault();
        props.djangoService.create_user(userName, email, password, password2);
        props.setSignUp(false);
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
                    <PersonAdd style={{width:"40", height:"40"}}/>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4">Register</Typography> 
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
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    </FormControl>
                </Grid>
                <br />
                <Grid item xs={12}>
                <FormControl style={{width: 400}}>
                    <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                    <Input
                        id="password2"
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    <br />
                </FormControl>
               </Grid>
               <br/>
               <Grid item xs={12}>
               <Button style={{marginRight: 50}} onClick={() => props.setSignUp(false)}>Back</Button>
               <Button style={{backgroundColor: "#00bf8f", color: "#fff"}} variant="contained"  onClick={handleSubmit}>Register</Button>
               </Grid>
            </Grid>
        </Container>
    )
} 

export default Register;

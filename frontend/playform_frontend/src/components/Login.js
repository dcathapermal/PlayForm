import React, { useState } from 'react';

const Login = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <input value = {userName} onChange = {(e) => setUserName(e.target.value)}></input>
            <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
            <button onClick = {() => props.djangoService.login(userName, password)}>Login</button>
        </div>
    )
} 

export default Login;
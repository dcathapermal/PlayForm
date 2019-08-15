import React, { useState } from 'react';

const Login=(props) => {

    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("");

    const handleSubmit=(event) => {
        event.preventDefault()
        props.djangoService.login(userName, password).then(() => {
            props.setAuthenticated(true);
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label>Username</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            </div>
            <br />
            <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            {/* <button onClick={() => props.djangoService.login(userName, password)}>Login</button> */}
            <button>Log In</button>
        </form>
    )
} 

export default Login;

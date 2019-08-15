import React, { useState } from 'react';

const Register=(props) => {

    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const [password2, setPassword2]=useState("");
    const [error, setError]=useState("");

    const handleSubmit=(event) => {
        event.preventDefault()
        props.djangoService.create_user(userName, email, password, password2).then((response) => {
            // Success :tada:
            console.log(response);
        })
        .catch((error) => {
            // Error :fearful:
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                setError()
            } else if (error.request) {
                /*
                 * The request was made but no response was received, error.request
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label>Username</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            </div>
            <br />
            <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <br />
            <div>
            <label>Password (minimum of 6 characters)</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <br />
            <div>
            <label>Confirm Password (minimum of 6 charaters)</label>
            <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
            </div>
            {/* <button onClick={() => props.djangoService.login(userName, password)}>Login</button> */}
            <button>Sign Up</button>
        </form>
    )
} 

export default Register;

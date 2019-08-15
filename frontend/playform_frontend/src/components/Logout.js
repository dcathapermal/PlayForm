import React from 'react';

const Logout=(props) => {

    const handleSubmit=(event) => {
        props.djangoService.logout()
        props.setAuthenticated(false);
    }

    return(
        <div>
            <h1>Logout</h1>
            <button onClick={handleSubmit}>Log Out</button>
        </div>
    )
} 

export default  Logout;

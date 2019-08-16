import React, { useState } from 'react';
import Home from './components/Home'
import DjangoService from './components/djangoService'
import Register from './components/Register'
import Login from './components/Login'


const djangoService=new DjangoService();

function App () {

  const [authenticated, setAuthenticated] = useState(false);
  const [signUp, setSignUp] = useState(false);

    return (
      <div className="App">
        {
          signUp ?
          <Register djangoService = {djangoService} setSignUp={setSignUp}/>
          :
          authenticated ? 
          <div>
            <Home djangoService = {djangoService} setAuthenticated = {setAuthenticated} />
          </div>
          :
          <div>
            <Login djangoService = {djangoService} setAuthenticated = {setAuthenticated} setSignUp={setSignUp} />
          </div>
        }
      </div>
    );
  }

export default App;


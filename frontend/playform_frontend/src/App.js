import React, { useState } from 'react';
import Player from './components/Player'
import Home from './components/Home'
import DjangoService from './components/djangoService'
import Register from './components/Register'
import Search from './components/Search'
import Login from './components/Login'
import Logout from './components/Logout'
import Playlist from './components/Playlist'


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
            <Search djangoService = {djangoService}/>
            <Logout djangoService = {djangoService} setAuthenticated = {setAuthenticated}/>
            <Playlist djangoService = {djangoService} />
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


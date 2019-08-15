import React, { useState } from 'react';
import Player from './components/Player'
import Home from './components/Home'
import DjangoService from './components/djangoService'
import Register from './components/Register'
import Search from './components/Search'
import Login from './components/Login'
import Logout from './components/Logout'

const djangoService=new DjangoService();

function App () {

  const [authenticated, setAuthenticated] = useState(false);

    return (
      <div className="App">
        {
          !{authenticated} ? 
          <div> 
            <Home />
            <Search djangoService = {djangoService}/>
            <Logout djangoService = {djangoService} setAuthenticated = {setAuthenticated}/>
            <Player /> 
          </div>
          :
          <div>
          <Login djangoService = {djangoService} setAuthenticated = {setAuthenticated} />
          <Register djangoService = {djangoService} />
          </div>
        }
      </div>
    );
  }

export default App;


import React from 'react';
import Player from './components/Player'
import Home from './components/Home'
import DjangoService from './components/djangoService'
import Login from './components/Login'


const djangoService = new DjangoService();

function App () {
    return (
      <div className="App">
        {
          djangoService.has_authenticated() ? 
          <div> 
            <Home />
            <Player /> 
          </div>
          :
          <div>
            test
          <Login djangoService = {djangoService} />
          </div>
        }

      </div>
    );
  }

export default App;

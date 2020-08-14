import React from 'react';
import './App.css';
import NavBar from './containers/NavBar.js';
import GameAreaContainer from './containers/GameAreaContainer.js';

function App() {
  return (
    <div>
      <NavBar />
      <GameAreaContainer />
    </div>
  );
}



export default App;
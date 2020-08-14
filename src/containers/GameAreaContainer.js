import React from 'react';
import Game from '../components/Game';
import LeaderBoardContainer from './LeaderBoardContainer';

const GameAreaContainer = () =>  {

  return (
    <div className="game-area">
      <h1>Game-Area Container</h1>
      <Game />
      <LeaderBoardContainer />
    </div>
  );
}

export default GameAreaContainer;
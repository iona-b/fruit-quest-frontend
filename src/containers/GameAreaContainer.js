import React from 'react';
import LeaderBoardContainer from './LeaderBoardContainer';

const GameAreaContainer = ({topTen}) =>  {

  return (
    <div className="game-area">
      <LeaderBoardContainer topTen={topTen}/>
    </div>
  );
}

export default GameAreaContainer;
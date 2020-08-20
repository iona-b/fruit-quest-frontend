import React from 'react';
import LeaderBoardScoreCard from '../components/LeaderBoardScoreCard';

const LeaderBoardContainer = ({topTen}) =>  {
  return (
    <div className="leader-board">
      <h2 id="leader-board-header">Leader Board</h2>
      <LeaderBoardScoreCard topTen={topTen}/>
    </div>
  );
}

export default LeaderBoardContainer;
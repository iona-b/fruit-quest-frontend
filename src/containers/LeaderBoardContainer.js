import React from 'react';
import LeaderBoardScoreCard from '../components/LeaderBoardScoreCard';

const LeaderBoardContainer = () =>  {

  return (
    <div className="leader-board">
      <h2 id="leader-board-header">Leader Board</h2>
      <LeaderBoardScoreCard />
    </div>
  );
}

export default LeaderBoardContainer;
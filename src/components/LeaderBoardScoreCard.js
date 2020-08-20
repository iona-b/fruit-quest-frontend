import React from 'react';
import PlayerScoreCard from './PlayerScoreCard'

const LeaderBoardScoreCard = ({topTen}) => {
    return (
        <div>
            <div className="leader-board-score-card-headings">
                <h4 className="leader-board-headings">Ranking</h4>
                <h4 className="leader-board-headings">Player</h4>
                <h4 className="leader-board-headings">Points</h4>
            </div>
            {
                topTen.map((user, index) => {
                    return <PlayerScoreCard key={index+1} user={user} rank={index+1}/>
                })
            }
        </div>
    )
}

export default LeaderBoardScoreCard;
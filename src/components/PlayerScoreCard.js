import React from 'react';

const PlayerScoreCard = ({user, rank}) => {
    return (
        <div className="leader-board-score-card">
            <h4 className="leader-board-player-details">#{rank}</h4>
            <h4 className="leader-board-player-details">{user.name}</h4>
            <h4 className="leader-board-player-details">{user.total}</h4>
        </div>
    )
}

export default PlayerScoreCard;
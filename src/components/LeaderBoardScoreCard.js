import React from 'react';

const LeaderBoardScoreCard = () => {
    return (
        <div>
            <div className="leader-board-score-card-headings">
                <h4 className="leader-board-headings">Ranking</h4>
                <h4 className="leader-board-headings">Player</h4>
                <h4 className="leader-board-headings">Points</h4>
            </div>
            <div className="leader-board-score-card">
                <h4 className="leader-board-player-details">#1</h4>
                <h4 className="leader-board-player-details">Player</h4>
                <h4 className="leader-board-player-details">50</h4>
            </div>
            <div className="leader-board-score-card">
                <h4 className="leader-board-player-details">#2</h4>
                <h4 className="leader-board-player-details">Player</h4>
                <h4 className="leader-board-player-details">40</h4>
            </div>
            <div className="leader-board-score-card">
                <h4 className="leader-board-player-details">#3</h4>
                <h4 className="leader-board-player-details">Player</h4>
                <h4 className="leader-board-player-details">20</h4>
            </div>
        </div>
    )
}

export default LeaderBoardScoreCard;
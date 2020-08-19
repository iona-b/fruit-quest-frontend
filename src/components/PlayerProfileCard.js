import React from 'react';


const PlayerProfileCard = () => {
    return (
        <div className="player-profile-card">
            <h2 id="player-profile-header">Hi there, Player!</h2>
            <div className="profile-sections">
                <div className="profile-section-divs" id="high-score-div">
                    <img src={require("../high-score-logo.png")} alt='' className="profile-logos" id="high-score-logo"/>
                    <h2 className="profile-headings">High Score</h2>
                </div>
                <div className="profile-section-divs" id="level-div">
                    <img src={require("../level-logo.png")} alt='' className="profile-logos" id="level-logo"/>
                    <h2 className="profile-headings"> Level</h2>
                </div>
                <div className="profile-section-divs" id="delete-profile-div">
                    <img src={require("../delete-profile-logo.png")} alt='' className="profile-logos" id="delete-profile-logo"/>
                    <h2 className="profile-headings">Delete Profile</h2>
                </div>
            </div>
        </div>
    )
}

export default PlayerProfileCard;
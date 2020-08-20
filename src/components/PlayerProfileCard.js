import React from 'react';

const PlayerProfileCard = (props) => {
    const calculateTotalScore = (currentUserScores) => {
        if(currentUserScores.length === 1) {
            return currentUserScores[0].score
        } else if (currentUserScores.length >= 2){
            let scoresArr = currentUserScores.map(scores => scores.score)
            let total = scoresArr.reduce((a, b) => {
                return a + b
            }, 0)
            return total
        } else {
            return 0
        }
    }
    const calculateHighScore = (currentUserScores) => {
        if(currentUserScores.length === 1) {
            return currentUserScores[0].score
        } else if (currentUserScores.length >= 2){
            let scores = currentUserScores.map(scores => scores.score)
            return Math.max(...scores)
        } else {
            return 0
        }
    }

    return (
        <div className="player-profile-card">
            <h2 id="player-profile-header">Hi there {props.user.username}!</h2>
            <div className="profile-sections">
                <div className="profile-section-divs" id="high-score-div">
                    <img src={require("../high-score-logo.png")} alt='' className="profile-logos" id="high-score-logo"/>
                    <h2 className="profile-headings">High Score</h2>
                    <h2 className="profile-headings">{calculateHighScore(props.currentUserScores)}</h2>
                </div>
                <div className="profile-section-divs" id="level-div">
                    <img src={require("../level-logo.png")} alt='' className="profile-logos" id="level-logo"/>
                    <h2 className="profile-headings">Total Score</h2>
                    <h2 className="profile-headings">{calculateTotalScore(props.currentUserScores)}</h2>
                </div>
                <div className="profile-section-divs" id="delete-profile-div" onClick={(event) => {if (window.confirm('Are you sure you want to delete your profile?')) props.deleteProfile(event)}}>
                    <img src={require("../delete-profile-logo.png")} alt='' className="profile-logos" id="delete-profile-logo"/>
                    <h2 className="profile-headings">Delete Profile</h2>
                </div>
            </div>
        </div>
    )
}

export default PlayerProfileCard;
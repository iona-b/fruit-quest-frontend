import React from 'react';

const PlayerProfileCard = (props) => {
    console.log(props)
    return (
        <div className="player-profile-card">
            <h2 id="player-profile-header">Hi there {props.user.username}!</h2>
            <div className="profile-sections">
                <div className="profile-section-divs" id="high-score-div">
                    <img src={require("../high-score-logo.png")} alt='' className="profile-logos" id="high-score-logo"/>
                    <h2 className="profile-headings">High Score</h2>
                    <h2 className="profile-headings">50</h2>
                </div>
                <div className="profile-section-divs" id="level-div">
                    <img src={require("../level-logo.png")} alt='' className="profile-logos" id="level-logo"/>
                    <h2 className="profile-headings">Total Score</h2>
                    <h2 className="profile-headings">350</h2>
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
import React from 'react';
import PlayerProfileCard from '../components/PlayerProfileCard';

const ProfileContainer = (props) =>  {

  return (
    <div className="profile">
      <PlayerProfileCard deleteProfile={props.deleteProfile} user={props.user} currentUserScores={props.currentUserScores}/>
    </div>
  );
}

export default ProfileContainer;

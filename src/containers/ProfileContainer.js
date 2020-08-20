import React from 'react';
import PlayerProfileCard from '../components/PlayerProfileCard';

const ProfileContainer = (props) =>  {

  return (
    <div className="profile">
      <PlayerProfileCard deleteProfile={props.deleteProfile} user={props.user}/>
    </div>
  );
}

export default ProfileContainer;

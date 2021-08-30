import React from 'react';

const RoboFriendsList = ({name, email}) => {
  return (
    <div className= "bg-dark-blue dib br3 pa3 ma2 grow bw-2 shadow-5">
      <h1>Robo Friends</h1>
      <img src="https://robohash.org/test?size=200x200" alt="Robots"/>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
 
  );
}

export default RoboFriendsList;

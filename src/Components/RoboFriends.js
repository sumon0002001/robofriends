import React from 'react';

const RoboFriends = ({ name, email, id }) => {
  return (
    <div className= "bg-dark-blue dib br3 pa3 ma2 grow bw-2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Robots"/>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
 
  );
}

export default RoboFriends;


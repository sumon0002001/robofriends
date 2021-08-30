import React from 'react';
import RoboFriends from './RoboFriends';

const RoboFriendsList = ({robots}) => {
  return (
    <div>
      {robots.map((user,i) => {
        return(
          <RoboFriends
            key= {i}
            id = {robots[i].id}
            name = {robots[i].name}
            email = {robots[i].email}
          />
        )
      })}  
    </div>
  )
}

export default RoboFriendsList

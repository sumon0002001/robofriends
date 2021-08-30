import React from 'react';
import RoboFriends from './RoboFriends';

const RoboFriendsList = ({robots}) => {
  return (
    <div>
      <RoboFriends id = {robots[0].id} name = {robots[0].name} email= {robots[0].email} />
      <RoboFriends id = {robots[1].id} name = {robots[1].name} email= {robots[1].email} />
      <RoboFriends id = {robots[2].id} name = {robots[2].name} email= {robots[2].email} />    
    </div>
  )
}

export default RoboFriendsList

import React from 'react';
import { robots } from './robots';
import './App.css'
import RoboFriendsList from './Components/RoboFriendsList';
const App = () => {
  return (
    <div >
     <h1 className = "app">Robo Friends</h1>
     <RoboFriendsList robots = {robots} />
     </div>
  );
}

export default App;

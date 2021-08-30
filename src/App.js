import React from 'react';
import RoboFriends from './Components/RoboFriends';
import { robots } from './robots';

const App = () => {
  return (
    <div >
     <RoboFriends robots ={robots} />
     </div>
  );
}

export default App;

import React, {useState} from 'react';
import { robots } from './robots';
import './App.css'
import RoboFriendsList from './Components/RoboFriendsList';
import SearchBox from './Components/SearchBox';


const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="tc" >
     <h1 className = "app">Robo Friends</h1>
     <SearchBox changeHandler= {changeHandler}/>
     <RoboFriendsList robots = {robots} />
     </div>
  );
}

export default App;

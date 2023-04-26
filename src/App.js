import React, { useState } from 'react';
import CardList from './components/CardList';
import { robots } from './assets/robots'
import Search from './components/Search';

function App() {

  const [appState, setAppState] = useState({
    robots: robots,
    searchField: '',
  })

  const onSearchChange = (event) => {
    setAppState({ ...appState, searchField: event.target.value });
  };

  const filteredRobots = appState.robots.filter((robot) =>
    robot.name.toLowerCase().includes(appState.searchField.toLowerCase())
  );

  return (
    <div className='tc'>
      {/* they are communicating each other brother using state: 'useState' using Hooks */}
      <Search onSearchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
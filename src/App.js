import React, { useState, useEffect } from 'react'
import CardList from './components/CardList';
import { robots } from './assets/resultsMock'
import Search from './components/Search';

function App() {

  const [appState, setAppState] = useState({
    robots: robots,
    searchField: '',
  })

  useEffect(() => {
    setAppState({ ...appState, searchField: '' });
    // componentDidMount() logic here
    // You DON'T use the keyword "this". Since it's not a class
    // You DON'T have to reference the component itself.
  }, [])

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
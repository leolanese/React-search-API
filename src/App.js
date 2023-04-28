import React, { useState, useEffect, memo } from 'react'
import CardList from './components/CardList';
// import { mockResults } from './assets/resultsMock'
import Search from './components/Search';

function App() {

  const [appState, setAppState] = useState({
    robots: [], // mockResults
    searchField: '',
  })

  useEffect(() => {
    // componentDidMount() logic here
    // You DON'T use the keyword "this". Since it's not a class
    // You DON'T have to reference the component itself.

    // here using native fetch: `window.fetch`
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setAppState({ ...appState, robots: users }));
  }, [])

  const onSearchChange = (event) => {
    setAppState({ ...appState, searchField: event.target.value });
  };

  const filteredRobots = appState.robots.filter((robot) =>
    robot.name.toLowerCase().includes(appState.searchField.toLowerCase())
  );

  if (appState.robots.length === 0 ){
    return (
      <>
        <h1>Loading... Please, wait.</h1>
      </>
    )
  } else {
    return (
      <div className='tc'>
        {/* they are communicating each other brother using state: 'useState' using Hooks */}
        <Search onSearchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }

}

export default memo(App);
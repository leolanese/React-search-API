import React, { useState, useEffect, memo } from 'react'
import CardList from '../components/CardList';
// import { mockResults } from './assets/resultsMock'
import Search from '../components/Search';
import Scroll from '../components/Scroll';

function App() {

  const [appState, setAppState] = useState({
    users: [], // mockResults
    searchField: '',
  })

  useEffect(() => {
    // componentDidMount() logic here
    // You DON'T use the keyword "this". Since it's not a class
    // You DON'T have to reference the component itself.

    // here using native fetch: `window.fetch`
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setUsers(users));
  }, [])
  // [appState] means that useEffect hook is watching for changes in appState, 
  // and when appState changes, the useEffect hook will run again

  const setUsers = (users) => {
    setAppState((prevState) => ({ ...prevState, users: users }));
    // (prevState => ({ ...prevState, users: users })). This ensures that you're always 
    // using the most recent state when setting the new state
  };

  const onSearchChange = (event) => {
    setAppState({ ...appState, searchField: event.target.value });
  };

  const filteredUsers = appState.users.filter((user) =>
    user.name.toLowerCase().includes(appState.searchField.toLowerCase())
  );

  if (appState.users.length === 0 ){
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

        <Scroll>{/* Parent */}
           <CardList users={filteredUsers} /> {/* Children */}
        </Scroll>

      </div>
    )
  }

}

export default memo(App);
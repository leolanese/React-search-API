import React, { useState, useEffect, memo } from 'react'
import CardList from '../components/CardList';
// import { mockResults } from './assets/resultsMock'
import Footer from '../components/Footer';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import useErrorBoundary from './../components/UseErrorBoundary';

function App() {
  const [data, setData] = useState(null);
  const [error, throwError] = useErrorBoundary();
  const [appState, setAppState] = useState({
    users: [], // mockResults
    searchField: '',
  })

  useEffect(() => {
    // componentDidMount() logic equivalent here
    // Note: With hooks, "this" keyword and component self-reference are not needed
    // Using native fetch: `window.fetch` by default
    const fetchUsers = async (signal) => {
      try {
        // The AbortController and its signal offer a way to communicate the abort event to the fetch request
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        console.table(users)
        setUsers(users);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch request was aborted');
        } else {
          throwError(error);
        }
      }
    };
    
    const abortController = new AbortController();
    fetchUsers(abortController.signal);

    return () => {
      // cleanup function:
      // Cancel any ongoing fetch requests when the component unmounts or throwError changes
      abortController.abort();
    };
  }, [throwError]); // if preset, effect will only activate if the values in the list change
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

  return !appState.users.length ?
      <>
        <h1>Loading... Please, wait.</h1>
      </>
  : (
      <div className='tc'>

          {/* they are communicating each other brother using state: 'useState' using Hooks */}
          <Search onSearchChange={onSearchChange} />

          <Scroll>{/* Parent */}
            <CardList users={filteredUsers} /> {/* Children */}
          </Scroll>

          <Footer
              messageToChield1={'message 1'} 
              messageToChield2={'message 2'} >
          </Footer>

      </div>
  );

}

export default memo(App);
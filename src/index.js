import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Chield1 from './Chield1';
import 'tachyons';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  lets you find common bugs in your components early during development.
  <React.StrictMode>

    <App />

    {/* <Chield1 
      messageToChield1={'message 1'} 
      messageToChield2={'message 2'} 
    /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

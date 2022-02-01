import { useState, useEffect } from 'react';

import firebase from './firebase/firebase.utils';

import './App.css';

import Login from './Login';
import Home from './Home'


import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);
  return (
    <div className="App">
      <h1>Firebase Authentication</h1>
      {user ? <Home user={user}/> : <Login />}
    </div>
  );
}

export default App;

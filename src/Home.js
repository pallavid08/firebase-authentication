import React from 'react';
import './App.css'
import { auth } from './firebase/firebase.utils.js'



const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <h3>Email <span></span>{user.email}</h3>
      <img src={user.photoURL} alt="photo" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home;
import React from 'react';
import './App.css'
import { auth } from './firebase/firebase.utils.js'



const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      {/* <h3>Email <span></span>{user.email}</h3> */}
      <img src={user.photoURL} alt="photo" />
      <div>
      <button className="button signout" onClick={() => auth.signOut()}><i className="fab fa-google"></i>Sign out</button>
      </div>
      
    </div>
  )
}

export default Home;
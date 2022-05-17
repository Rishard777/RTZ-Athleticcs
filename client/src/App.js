import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
  }
  if(user){
    return (
      <div className="App">
        Welcome!
      </div>
    )
  } else
  return (
    <div className="App">
      <Login  onLogin={handleLogin} />
    </div>
  );
}

export default App;

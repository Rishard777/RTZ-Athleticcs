import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import './App.css';



function App() {
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
  }

}
  



export default App;

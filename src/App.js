import './App.css';
import React, { useState } from 'react';
import styles from './App.module.css';
import { useHistory } from "react-router-dom";


function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  const history = useHistory();
  function handleClick() {
    history.push("/mainPage");
  }


  return (

    <div className="App">

      <h2>Welcome to BAR APP!</h2>

      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: '20px' }}>
          <label> Username </label>
          <input className={styles.input} onChange={handleUsernameChange} />
          {username.length > 5 ? <div className="messages"> Username is ok </div> : <div className="messages">Must be more than 5 characters!</div>}
        </div>

        <div>
          <label> Password </label>
          <input className="input" onChange={handlePasswordChange} />
          {password.length > 3 ? <div className="messages"> Password is ok </div> : <div className="messages">Must be more than 3 characters!</div>}
        </div>

        <button className="btn" type="submit" disabled={!username || !password} onClick={handleClick} >
          Log IN
        </button>

      </form>

    </div>

  );
}

export default App;

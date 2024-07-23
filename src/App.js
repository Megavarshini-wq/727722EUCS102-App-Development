import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Signup';

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="App">
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}

export default App;
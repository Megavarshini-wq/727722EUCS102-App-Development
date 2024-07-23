import React, { useState } from 'react';

function Signup({ setIsRegistered }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    alert('Registered!');
    setIsRegistered(true);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <span onClick={() => setIsRegistered(true)}>Login here</span>
      </p>
    </div>
  );
}

export default Signup;
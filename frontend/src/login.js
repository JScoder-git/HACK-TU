import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace 'admin' and 'password' with your actual admin credentials
    if (username === 'Sahil' && password === 'password') {
      navigate('/dashboard'); // Redirect to Dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        USERNAME:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        PASSWORD:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
};

export default LoginPage;

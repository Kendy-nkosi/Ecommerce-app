import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (in a real app, validate more robustly)
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

      // Simulate successful login
      localStorage.setItem('isLoggedIn', 'true');
     navigate('/about');
      return;
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="auth-error">{error}</p>}
        <div className="auth-input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-input">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="auth-button">Log In</button>
      </form>
        <p className="signup-text">Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;
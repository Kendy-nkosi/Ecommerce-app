import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
      if (!email || !password || !confirmPassword) {
          setError('Please fill in all fields.');
          return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
     }
      // Simulate successful signup
       localStorage.setItem('isLoggedIn', 'true');
     navigate('/about');
       return;
   };


  return (
      <div className="auth-container">
          <h2>Sign Up</h2>
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
              <div className="auth-input">
                  <label>Confirm Password</label>
                  <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                  />
              </div>
              <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <p className="signup-text">Already have an account? <a href="/login">Login</a></p>
      </div>
  );
}

export default Signup;
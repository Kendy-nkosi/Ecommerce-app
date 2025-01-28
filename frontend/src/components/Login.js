import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
   const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     const [message, setMessage] = useState('');
     const navigate = useNavigate();
     const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/login', {  // Ensure this URL is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username,
                    password,
                })
            });
            
            if (response.ok) {
                navigate('/dashboard');
            } else {
                const data = await response.json();
                setMessage(data.message);
            }
        } catch(e) {
            setMessage("Error in login");
        }
    };

   return (
        <div className="login-container"> {/* Added container for styles */}
            <div className='login-form-container'>
            <h2>Login</h2>
            <input
                type="text"
              placeholder="Username"
              value={username}
               onChange={(e) => setUsername(e.target.value)}
             />
          <input
               type="password"
             placeholder="Password"
                value={password}
               onChange={(e) => setPassword(e.target.value)}
              />
            <button onClick={handleLogin}>Log In</button>
           <p className="signup-text">Don't have an account? <a href="/signup">Sign Up</a></p>
            <p>{message}</p>
            </div>
        </div>
    );
  }
  export default Login;
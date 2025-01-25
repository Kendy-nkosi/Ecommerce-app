import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Auth() {
  const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');
 const navigate = useNavigate();
  const location = useLocation();

 const handleLogin = async () => {
     try {
         const response = await fetch('/api/login', {
              method: 'POST',
             headers: {
                'Content-Type': 'application/json',
               },
              body: JSON.stringify({ username, password }),
          });

         const data = await response.json();
            setMessage(data.message);
         if (response.ok) {
               localStorage.setItem('isLoggedIn', 'true');
              const from = location?.state?.from?.pathname || '/productslist';
              navigate(from);
            }
       } catch (error) {
            setMessage('Error logging in');
       }
  };

return (
      <div className="auth">
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
           <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
       </div>
   );
}
export default Auth;
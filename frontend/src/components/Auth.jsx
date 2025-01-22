
import React, { useState } from 'react';

function Auth() {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [message, setMessage] = useState('');

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
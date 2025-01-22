import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');

    const handleRegister = async () => {
     try {
            const response = await fetch('/api/register', {
              method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
               body: JSON.stringify({ username, password }),
          });
            const data = await response.json();
           setMessage(data.message);
      } catch (error) {
           setMessage('Error signing up');
       }
    };

     return (
       <div className='register'>
          <h2>Register</h2>
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
          <button onClick={handleRegister}>Register</button>
        <p>{message}</p>
    </div>
  );
}
export default Register;

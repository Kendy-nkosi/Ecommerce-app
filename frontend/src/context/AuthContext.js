import React, { createContext, useState, useContext, useEffect } from 'react';
  
  const AuthContext = createContext(null);
  
  export const AuthProvider = ({ children }) => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
          const checkLoginStatus = () => {
               const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
              const storedUserEmail = localStorage.getItem('userEmail');
             setIsLoggedIn(loggedInStatus);
              setUserEmail(storedUserEmail);
           };

        checkLoginStatus();

      window.addEventListener('storage', checkLoginStatus);
         return () => window.removeEventListener('storage', checkLoginStatus);
     }, []);

      const login = (email) => {
           localStorage.setItem('isLoggedIn', 'true');
           localStorage.setItem('userEmail', email)
         setIsLoggedIn(true);
           setUserEmail(email);
        window.dispatchEvent(new Event('storage'));
     };
      const logout = () => {
        localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('userEmail');
         setIsLoggedIn(false);
          setUserEmail(null)
        window.dispatchEvent(new Event('storage'));
    };
      return (
          <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, userEmail }}>
              {children}
          </AuthContext.Provider>
      );
  };
  
  export const useAuth = () => useContext(AuthContext);
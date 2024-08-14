// src/Context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    console.log('User logged in');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');
    console.log('User logged out');
  };

  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authState);
    console.log('Auth state on mount:', authState);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

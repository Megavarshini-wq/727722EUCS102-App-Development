
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     () => localStorage.getItem('isAuthenticated') === 'true'
//   );

//   const login = () => {
//     setIsAuthenticated(true);
//     localStorage.setItem('isAuthenticated', 'true');
//     console.log('User logged in');
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('isAdmin');
//     console.log('User logged out');
//   };

//   useEffect(() => {
//     const authState = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authState);
//     console.log('Auth state on mount:', authState);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('User logged in:', userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    console.log('User logged out');
  };

  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authState);
    console.log('Auth state on mount:', authState);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

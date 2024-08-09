// // src/Components/PrivateRoute/PrivateRoute.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';

// const PrivateRoute = ({ element: Component, isAdminRoute }) => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     console.log('Not authenticated, redirecting to login');
//     return <Navigate to="/login" />;
//   }

//   if (isAdminRoute && localStorage.getItem('isAdmin') !== 'true') {
//     console.log('Not an admin, redirecting to home');
//     return <Navigate to="/" />;
//   }

//   return <Component />;
// };

// export default PrivateRoute;
// src/Components/PrivateRoute/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const PrivateRoute = ({ element: Component, isAdminRoute }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login');
    return <Navigate to="/login" />;
  }

  if (isAdminRoute && localStorage.getItem('isAdmin') !== 'true') {
    console.log('Not an admin, redirecting to home');
    return <Navigate to="/" />;
  }

  return <Component />;
};

export default PrivateRoute;
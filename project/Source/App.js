// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Category from './Components/Category/Category';
import Books from './Components/Book/Book';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import CategoryBooks from './Components/CategoryBooks/CategoryBook';
import CategoryVideos from './Components/CategoryVideos/CategoryVideo';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => {
        if (!localStorage.getItem('users')) {
          localStorage.setItem('users', JSON.stringify(data));
        }
      })
      .catch(error => console.error('Error initializing users:', error));
  }, []);

  const isNavbarVisible =
    location.pathname !== '/login' &&
    location.pathname !== '/signup' &&
    !location.pathname.startsWith('/book/') &&
    location.pathname !== '/about' &&
    location.pathname !== '/profile';

  const isFooterVisible =
    location.pathname !== '/login' &&
    location.pathname !== '/signup' &&
    location.pathname !== '/profile';

  return (
    <AuthProvider>
      <div>
        {isNavbarVisible && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/category/:age" element={<Category />} />
          <Route path="/category/:age/books" element={<CategoryBooks />} />
          <Route path="/category/:age/videos" element={<CategoryVideos />} />
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<PrivateRoute element={AdminDashboard} isAdminRoute={true} />} />
        </Routes>
        {isFooterVisible && <Footer />}
      </div>
    </AuthProvider>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;

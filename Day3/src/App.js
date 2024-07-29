
import React from 'react';
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
import Profile from './Components/Profile/Profile'; // Import Profile component
import AdminLogin from './Components/AdminLogin/AdminLogin';

const App = () => {
  const location = useLocation();
  const isNavbarVisible = 
      location.pathname !== '/login' &&
      location.pathname !== '/signup' &&
      !location.pathname.startsWith('/book/') &&
      location.pathname !== '/about';

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
          <Route path="/profile" element={<Profile />} /> {/* Add profile route */}
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
        <Footer />
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

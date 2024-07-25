// src/Components/Navbar/navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img src="your-logo-url" alt="Logo" className="navbar-logo" />
                <h1 className="navbar-title">Fables Factory</h1>
            </div>
            <div className="navbar-links">
                <Link to="/books" className="navbar-link">Books</Link>
                <div className="navbar-dropdown">
                    <button className="navbar-link">Category</button>
                    <div className="dropdown-content">
                        <Link to="/category/age-3-5">Age 3-5</Link>
                        <Link to="/category/age-6-8">Age 6-8</Link>
                        <Link to="/category/age-9-12">Age 9-12</Link>
                    </div>
                </div>
                <Link to="/about" className="navbar-link">About Us</Link>
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/login" className="navbar-link">Login</Link>
                <Link to="/signup" className="navbar-link">Signup</Link>
            </div>
        </nav>
    );
}

export default Navbar;

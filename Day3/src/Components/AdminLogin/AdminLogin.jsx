// src/Components/AdminLogin/AdminLogin.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (username === 'admin@gmail.com' && password === 'Admin12345') {
                navigate('/admin-dashboard'); // Replace with your admin dashboard route
            } else {
                alert('Invalid admin credentials');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>ADMIN LOGIN</h2>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
                {/* <p>Don't have an account? <Link to="/signup">Signup</Link></p> */}
            </form>
        </div>
    );
};

export default AdminLogin;
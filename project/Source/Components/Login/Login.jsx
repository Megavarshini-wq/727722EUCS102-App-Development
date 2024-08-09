// // src/Components/Login/Login.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../../Context/AuthContext';
// import './Login.css';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.get('http://localhost:3001/users');
//             const users = response.data;

//             const user = users.find(u => u.username === username && u.password === password);

//             if (user) {
//                 login();
//                 navigate('/');
//             } else {
//                 alert('Invalid credentials');
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             alert('Login failed. Please try again.');
//         }
//     };

//     return (
//         <div className="login-container">
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <h2>LOGIN</h2>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Login</button>
//                 <p>Don't have an account? <Link to="/signup">Signup</Link></p>
//             </form>
//         </div>
//     );
// };

// export default Login;

// src/Components/Login/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                login(user); // Pass user data to login
                navigate('/');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
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
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </form>
        </div>
    );
};

export default Login;


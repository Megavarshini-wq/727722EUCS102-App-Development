
// import React, { useState, useEffect } from 'react';
// import "./Manage.css";

// const ManageUser = () => {
//     const [users, setUsers] = useState([]);

//     // Fetch users from backend
//     const fetchUsers = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/userInfo');
//             const data = await response.json();
//             console.log('Fetched users data:', data); // Log the data for debugging
//             // If data is wrapped in an object, e.g., { users: [...] }, you need to access that property:
//             setUsers(Array.isArray(data) ? data : data.users || []);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     // Load users when the component mounts
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     // Delete user from backend
//     const handleDeleteUser = async (userId) => {
//         try {
//             await fetch(`http://localhost:8080/userInfo/${userId}`, { method: 'DELETE' });
//             fetchUsers(); // Re-fetch users after deletion
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     return (
//         <div className="manage-section">
//             <h2>Manage Users</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Username</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>
//                                 <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ManageUser;

import React, { useState, useEffect } from 'react';
import "./Manage.css";

const ManageUser = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from backend
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/userInfo');
            const data = await response.json();
            console.log('Fetched users data:', data); // Log the data for debugging
            setUsers(Array.isArray(data) ? data : data.users || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Load users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    // Delete user from backend
    const handleDeleteUser = async (userId) => {
        try {
            await fetch(`http://localhost:8080/users/${userId}`, { method: 'DELETE' });
            fetchUsers(); // Re-fetch users after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="manage-section">
            <h2>Manage Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;

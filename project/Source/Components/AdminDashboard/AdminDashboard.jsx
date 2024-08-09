
// import React, { useState, useEffect } from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [books, setBooks] = useState([]);
//     const [categoryBooks, setCategoryBooks] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [newBook, setNewBook] = useState({ title: '', coverImage: '', pdf: '', category: '' });

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch('http://localhost:3001/users');
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };

//         const fetchBooks = async () => {
//             try {
//                 const response = await fetch('http://localhost:3002/books');
//                 const data = await response.json();
//                 setBooks(data);
//             } catch (error) {
//                 console.error('Error fetching books:', error);
//             }
//         };

//         const fetchCategoryBooks = async () => {
//             try {
//                 const response = await fetch('http://localhost:3003/category');
//                 const data = await response.json();
//                 setCategoryBooks(data);
//             } catch (error) {
//                 console.error('Error fetching category books:', error);
//             }
//         };

//         fetchUsers();
//         fetchBooks();
//         fetchCategoryBooks();
//     }, []);

//     const handleDeleteUser = async (userId) => {
//         try {
//             await fetch(`http://localhost:3001/users/${userId}`, { method: 'DELETE' });
//             setUsers(users.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const handleDeleteBook = async (bookId) => {
//         try {
//             await fetch(`http://localhost:3002/books/${bookId}`, { method: 'DELETE' });
//             setBooks(books.filter(book => book.id !== bookId));
//         } catch (error) {
//             console.error('Error deleting book:', error);
//         }
//     };

//     const handleAddBook = async (event) => {
//         event.preventDefault();
//         const endpoint = newBook.category === 'Fairy Tale' ? 'http://localhost:3002/books' : 'http://localhost:3003/category';

//         try {
//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newBook)
//             });

//             if (response.ok) {
//                 const addedBook = await response.json();
//                 if (newBook.category === 'Fairy Tale') {
//                     setBooks([...books, addedBook]);
//                 } else {
//                     setCategoryBooks([...categoryBooks, addedBook]);
//                 }
//                 setNewBook({ title: '', coverImage: '', pdf: '', category: '' });
//                 alert('Book added successfully');
//             } else {
//                 alert('Failed to add book');
//             }
//         } catch (error) {
//             console.error('Error adding book:', error);
//             alert('Error adding book');
//         }
//     };

//     const filteredUsers = users.filter(user =>
//         user.username.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="admin-dashboard">
//             <h2>Admin Dashboard</h2>
//             <input
//                 type="text"
//                 placeholder="Search Users"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="search-input"
//             />
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Username</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredUsers.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.username}</td>
//                             <td>
//                                 <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h2>Book Management</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Title</th>
//                         <th>Category</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {books.map(book => (
//                         <tr key={book.id}>
//                             <td>{book.id}</td>
//                             <td>{book.title}</td>
//                             <td>{book.category || 'N/A'}</td>
//                             <td>
//                                 <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h3>Add New Book</h3>
//             <form onSubmit={handleAddBook}>
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     value={newBook.title}
//                     onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Cover Image URL"
//                     value={newBook.coverImage}
//                     onChange={(e) => setNewBook({ ...newBook, coverImage: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="PDF URL"
//                     value={newBook.pdf}
//                     onChange={(e) => setNewBook({ ...newBook, pdf: e.target.value })}
//                 />
//                 <select
//                     value={newBook.category}
//                     onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
//                 >
//                     <option value="">Select Category</option>
//                     <option value="Fairy Tale">Fairy Tale</option>
//                     <option value="AGE 3-6">AGE 3-6</option>
//                     <option value="AGE 7-10">AGE 7-10</option>
//                     <option value="ABOVE 10">ABOVE 10</option>
//                 </select>
//                 <button type="submit">Add Book</button>
//             </form>
//         </div>
//     );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newBook, setNewBook] = useState({ title: '', coverImage: '', pdf: '', category: '' });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3001/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        const fetchBooks = async () => {
            try {
                const bookResponse = await fetch('http://localhost:3002/books');
                const bookData = await bookResponse.json();

                const categoryResponse = await fetch('http://localhost:3003/category');
                const categoryData = await categoryResponse.json();

                const combinedBooks = bookData.map(book => ({
                    ...book,
                    category: 'Fairy Tale'
                })).concat(categoryData.map(categoryBook => ({
                    ...categoryBook,
                    category: categoryBook.category
                })));

                setBooks(combinedBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchUsers();
        fetchBooks();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            await fetch(`http://localhost:3001/users/${userId}`, { method: 'DELETE' });
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleDeleteBook = async (bookId, category) => {
        const endpoint = category === 'Fairy Tale' ? `http://localhost:3002/books/${bookId}` : `http://localhost:3003/category/${bookId}`;
        
        try {
            const response = await fetch(endpoint, { method: 'DELETE' });
            if (response.ok) {
                setBooks(books.filter(book => book.id !== bookId));
            } else {
                console.error('Failed to delete book');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleAddBook = async (event) => {
        event.preventDefault();
        const endpoint = newBook.category === 'Fairy Tale' ? 'http://localhost:3002/books' : 'http://localhost:3003/category';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            });

            if (response.ok) {
                const addedBook = await response.json();
                setBooks([...books, addedBook]);
                setNewBook({ title: '', coverImage: '', pdf: '', category: '' });
                alert('Book added successfully');
            } else {
                alert('Failed to add book');
            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Error adding book');
        }
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <input
                type="text"
                placeholder="Search Users"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Book Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.category}</td>
                            <td>
                                <button onClick={() => handleDeleteBook(book.id, book.category)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Add New Book</h3>
            <form onSubmit={handleAddBook}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Cover Image URL"
                    value={newBook.coverImage}
                    onChange={(e) => setNewBook({ ...newBook, coverImage: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="PDF URL"
                    value={newBook.pdf}
                    onChange={(e) => setNewBook({ ...newBook, pdf: e.target.value })}
                />
                <select
                    value={newBook.category}
                    onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                >
                    <option value="">Select Category</option>
                    <option value="Fairy Tale">Fairy Tale</option>
                    <option value="AGE 3-6">AGE 3-6</option>
                    <option value="AGE 7-10">AGE 7-10</option>
                    <option value="ABOVE 10">ABOVE 10</option>
                </select>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AdminDashboard;

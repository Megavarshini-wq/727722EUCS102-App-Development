// import React, { useState, useEffect } from 'react';
// import Modal from '../Modal/Modal';
// import './Book.css'; // Import the CSS file

// const Books = () => {
//     const [books, setBooks] = useState([]);
//     const [selectedBook, setSelectedBook] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const handleBookClick = (pdfUrl) => {
//         setSelectedBook(pdfUrl);
//         setShowModal(true);
//     };

//     useEffect(() => {
//         fetch('/book.json')
//             .then(response => response.json())
//             .then(data => setBooks(data));
//     }, []);

//     return (
//         <>
//             <h2>FAIRY TALES</h2>
//             <div className="books-container">
//                 {books.map(book => (
//                     <div className="book-item" key={book.id}>
//                         <img src={book.coverImage} alt={book.title} className="book-image" onClick={() => handleBookClick(`/pdf/${book.pdf}`)} />
//                         <p className="book-title">{book.title}</p>
//                     </div>
//                 ))}
//             </div>
//             <Modal showModal={showModal} onClose={() => setShowModal(false)} pdfUrl={selectedBook} />
//         </>
//     );
// };

// export default Books;
// src/Components/Book/Book.jsx
// import React, { useState, useEffect } from 'react';
// import Modal from '../Modal/Modal';
// import { useAuth } from '../../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import './Book.css';

// const Books = () => {
//     const { isAuthenticated } = useAuth();
//     const navigate = useNavigate();
//     const [books, setBooks] = useState([]);
//     const [selectedBook, setSelectedBook] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const handleBookClick = (pdfUrl) => {
//         if (isAuthenticated) {
//             setSelectedBook(pdfUrl);
//             setShowModal(true);
//         } else {
//             navigate('/login');
//         }
//     };

//     useEffect(() => {
//         fetch('/book.json')
//             .then(response => response.json())
//             .then(data => setBooks(data));
//     }, []);

//     return (
//         <>
//             <h2>FAIRY TALES</h2>
//             <div className="books-container">
//                 {books.map(book => (
//                     <div className="book-item" key={book.id}>
//                         <img src={book.coverImage} alt={book.title} className="book-image" onClick={() => handleBookClick(`/pdf/${book.pdf}`)} />
//                         <p className="book-title">{book.title}</p>
//                     </div>
//                 ))}
//             </div>
//             <Modal showModal={showModal} onClose={() => setShowModal(false)} pdfUrl={selectedBook} />
//         </>
//     );
// };

// export default Books;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import Modal from '../Modal/Modal';
import './Book.css'; // Import the CSS file

const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleBookClick = (pdfUrl) => {
        if (isAuthenticated) {
            setSelectedBook(pdfUrl);
            setShowModal(true);
        } else {
            navigate('/login');
        }
    };

    useEffect(() => {
        fetch('/book.json')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <>
            <h2>FAIRY TALES</h2>
            <div className="books-container">
                {books.map(book => (
                    <div className="book-item" key={book.id}>
                        <img src={book.coverImage} alt={book.title} className="book-image" onClick={() => handleBookClick(`/pdf/${book.pdf}`)} />
                        <p className="book-title">{book.title}</p>
                    </div>
                ))}
            </div>
            <Modal showModal={showModal} onClose={() => setShowModal(false)} pdfUrl={selectedBook} />
        </>
    );
};

export default Books;

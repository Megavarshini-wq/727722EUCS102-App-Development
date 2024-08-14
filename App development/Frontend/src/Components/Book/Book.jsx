

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import Modal from '../Modal/Modal';
import booksData from '../../book.json'; // Import the JSON file
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
        setBooks(booksData.books); // Correctly access the array of books
    }, []);

    return (
        <>
            <h2>FAIRY TALES</h2>
            <div className="books-container">
                {books.map(book => (
                    <div className="book-item" key={book.id}>
                        <img 
                            src={book.coverImage} 
                            alt={book.title} 
                            className="book-image" 
                            onClick={() => handleBookClick(`/pdf/${book.pdf}`)} 
                        />
                        <p className="book-title">{book.title}</p>
                    </div>
                ))}
            </div>
            <Modal showModal={showModal} onClose={() => setShowModal(false)} pdfUrl={selectedBook} />
        </>
    );
};

export default Books;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';
// import Modal from '../Modal/Modal';
// import categoryData from '../../category.json'; // Import the JSON file
// import './CategoryBook.css';

// const CategoryBooks = () => {
//     const { age } = useParams();
//     const [books, setBooks] = useState([]);
//     const [selectedBook, setSelectedBook] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const { isAuthenticated } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const filteredBooks = categoryData.filter(book => book.category === age);
//         setBooks(filteredBooks);
//     }, [age]);

//     const handleBookClick = (pdfUrl) => {
//         if (isAuthenticated) {
//             setSelectedBook(pdfUrl);
//             setShowModal(true);
//         } else {
//             navigate('/login');
//         }
//     };

//     return (
//         <div className="category-books-container">
//             <div className="books-grid">
//                 {books.map(book => (
//                     <div key={book.id} className="category-book-item" onClick={() => handleBookClick(`/pdf/${book.pdf}`)}>
//                         <img src={book.coverImage} alt={book.title} className="category-book-image" />
//                         <p className="category-book-title">{book.title}</p>
//                     </div>
//                 ))}
//             </div>
//             <Modal showModal={showModal} onClose={() => setShowModal(false)} pdfUrl={selectedBook} />
//         </div>
//     );
// };

// export default CategoryBooks;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import Modal from '../Modal/Modal';
import categoryData from '../../category.json'; // Import the JSON file
import './CategoryBook.css';

const CategoryBooks = () => {
    const { age } = useParams();
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Ensure categoryData has the expected structure
        if (Array.isArray(categoryData.category)) {
            const filteredBooks = categoryData.category.filter(book => book.category === age);
            setBooks(filteredBooks);
        } else {
            console.error('categoryData.category is not an array');
        }
    }, [age]);

    const handleBookClick = (pdfUrl) => {
        if (isAuthenticated) {
            setSelectedBook(pdfUrl);
            setShowModal(true);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="category-books-container">
            <div className="books-grid">
                {books.map(book => (
                    <div key={book.id} className="category-book-item" onClick={() => handleBookClick(`/pdf/${book.pdf}`)}>
                        <img src={book.coverImage} alt={book.title} className="category-book-image" />
                        <p className="category-book-title">{book.title}</p>
                    </div>
                ))}
            </div>
            <Modal showModal={showModal} onClose={() => setShowModal(false)} pdfUrl={selectedBook} />
        </div>
    );
};

export default CategoryBooks;
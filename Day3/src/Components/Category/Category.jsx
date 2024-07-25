// src/Components/Category/category.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';

const Category = () => {
    const { age } = useParams();
    return (
        <div className="category-container">
            <h2>Category: Age {age}</h2>
            <p>Here you can find books and educational content suitable for children aged {age} years.</p>
        </div>
    );
}

export default Category;


import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
    '/Books/ch.jpg',
    '/Books/bb.jpg'
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeProp({ fade: 'fade-out' });
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFadeProp({ fade: 'fade-in' });
            }, 1000); // Duration of fade-out before changing the image
        }, 4000); // Total duration between image changes

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div 
            className={`home-container ${fadeProp.fade}`}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
            <div className="home-content">
                <h1>Welcome to Fables Factory</h1>
            </div>
        </div>
    );
};

export default Home;

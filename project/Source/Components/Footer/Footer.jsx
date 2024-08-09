// src/Components/Footer/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>HELP?</h3>
                <ul>
                    <li><a href="#why-choose-us">Why Choose Us</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#terms-and-conditions">Terms and Conditions</a></li>
                    <li><a href="#cookies-policy">Cookies Policy</a></li>
                    <li><a href="#privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>CONTACT US</h3>
                <ul>
                    <li>Phone: +919848300663</li>
                    <li>Address: 112 Bramshill Close, Coimbatore, India</li>
                </ul>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com" className="footer-icon"><FaFacebookF /></a>
                <a href="https://www.twitter.com" className="footer-icon"><FaTwitter /></a>
                <a href="https://www.pinterest.com" className="footer-icon"><FaPinterestP /></a>
                <a href="https://www.instagram.com" className="footer-icon"><FaInstagram /></a>
                <a href="https://www.youtube.com" className="footer-icon"><FaYoutube /></a>
            </div>
        </footer>
    );
};

export default Footer;
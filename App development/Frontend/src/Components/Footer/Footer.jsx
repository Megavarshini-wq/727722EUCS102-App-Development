
// import React from 'react';
// import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-section">
//                 <h3>About Us</h3>
//                 <p>
//                 Welcome to Fables Factory!
//                 An innovative children's storybook and education portal for kids of different age. 
//                 We offer engaging, age-appropriate interactive storybooks that inspire a love for reading and learning while enhancing critical thinking skills. 
//                 Join us in making reading fun, safe, and a lifelong adventure.
//                 </p>
//             </div>
//             <div className="footer-section">
//                 <h3>USEFUL LINKS</h3>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/category/3-6/books">Age 3-6</Link></li>
//                     <li><Link to="/category/7-10/books">Age 7-10</Link></li>
//                     <li><Link to="/category/above-10/books">Above 10</Link></li>
//                     <li><Link to="/books">Fairy Tales</Link></li>
//                 </ul>
//             </div>
//             <div className="footer-section">
//                 <h3>INFORMATION</h3>
//                 <ul>
//                     <li><Link to="/about">About us</Link></li>
//                     <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
//                     <li><Link to="/cookies-policy">Cookies Policy</Link></li>
//                     <li><Link to="/privacy-policy">Privacy Policy</Link></li>
//                 </ul>
//             </div>
//             <div className="footer-section">
//                 <h3>CONTACT US</h3>
//                 <ul>
//                     <li>Phone: +919848300663</li>
//                     <li>Address: 112 Bramshill Close, Coimbatore, India</li>
//                 </ul>
//             </div>
//             <div className="footer-social">
//                 <a href="https://www.facebook.com" className="footer-icon"><FaFacebookF /></a>
//                 <a href="https://www.twitter.com" className="footer-icon"><FaTwitter /></a>
//                 <a href="https://www.pinterest.com" className="footer-icon"><FaPinterestP /></a>
//                 <a href="https://www.instagram.com" className="footer-icon"><FaInstagram /></a>
//                 <a href="https://www.youtube.com" className="footer-icon"><FaYoutube /></a>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>About Us</h3>
                <p>
                Welcome to Fables Factory!
                An innovative children's storybook and education portal for kids of different age. 
                We offer engaging, age-appropriate interactive storybooks that inspire a love for reading and learning while enhancing critical thinking skills. 
                Join us in making reading fun, safe, and a lifelong adventure.
                </p>
            </div>
            <div className="footer-section">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/3-6/books">Age 3-6</Link></li>
                    <li><Link to="/category/7-10/books">Age 7-10</Link></li>
                    <li><Link to="/category/above-10/books">Above 10</Link></li>
                    <li><Link to="/books">Fairy Tales</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>INFORMATION</h3>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                    <li><Link to="/cookies-policy">Cookies Policy</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
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
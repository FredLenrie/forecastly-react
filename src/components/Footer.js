import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="useful-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#how-it-works">Check Weather</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="about">
        <h4>About Forecatly</h4>
        <p>Our mission is to provide the most accurate and timely weather information to keep you prepared.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

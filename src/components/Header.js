import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="header-content">
      <img src="../../public/logo.jfif" alt="Forecatly Logo" className="logo" />
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#how-it-works">Check Weather</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

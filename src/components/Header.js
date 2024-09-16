import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="header-content">
      <img src={`${process.env.PUBLIC_URL}/logo.jfif`} alt="Forecatly Logo" className="logo"/>
      <nav className="navbar">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#how-it-works">CHECK WEATHER</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

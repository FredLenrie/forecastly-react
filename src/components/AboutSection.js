import React from 'react';
import './AboutSection.css';

const AboutSection = () => (
  <section id="about" className="about-section">
    <div className="grid-container">
      <div className="section-container">
        <h1>Who We Are</h1>
        <p>At Forecastly, we’re dedicated to providing the most accurate and up-to-date weather information to help you plan your day with confidence. Our team of meteorologists and weather experts uses the latest technology and data sources to deliver reliable forecasts and weather updates.</p>
      </div>
      <div className="section-container">
        <h1>Our Mission</h1>
        <p>Our mission is to empower you with the information you need to make informed decisions about your day. Whether you’re planning a trip, preparing for severe weather, or just curious about the weather, we aim to deliver clear, accurate, and timely weather updates.</p>
      </div>
      <div className="section-container">
        <h1>What We Offer</h1>
        <ul>
          <li><strong>Accurate Forecasts:</strong> Get precise weather forecasts for your location, including temperature, precipitation, wind speed, and more.</li>
          <li><strong>Real-Time Updates:</strong> Stay informed with real-time weather alerts and notifications.</li>
          <li><strong>User-Friendly Interface:</strong> Enjoy an easy-to-use platform designed to provide the information you need quickly and efficiently.</li>
        </ul>
      </div>
      <div className="section-container">
        <h1>Our Technology</h1>
        <p>We use cutting-edge weather models and data analytics to ensure that our forecasts are as accurate as possible. Our team continually monitors weather patterns and updates our systems to reflect the latest information.</p>
      </div>
    </div>
  </section>
);

export default AboutSection;

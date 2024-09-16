import React from 'react';
import './AboutSection.css'; // Import your CSS file

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="content-container">
        <h1>Who We Are</h1>
        <p>
        At Forecastly, we’re dedicated to providing the most accurate and up-to-date weather 
        information to help you plan your day with confidence. Our team of meteorologists 
        and weather experts uses the latest technology and data sources to deliver reliable forecasts 
        and weather updates.
        </p>
      </div>
      <div className="content-container">
        <h1>Our Mission</h1>
        <p>
          At Forecastly, we’re dedicated to providing the most accurate and up-to-date weather 
          information to help you plan your day with confidence. Our team of meteorologists 
          and weather experts uses the latest technology and data sources to deliver reliable forecasts 
          and weather updates.
        </p>
      </div>
      <div className="content-container">
        <h1>Section 3</h1>
        <p>Content for the third section goes here.</p>
      </div>
      <div className="content-container">
        <h1>Section 4</h1>
        <p>Content for the fourth section goes here.</p>
      </div>
    </section>
  );
};

export default AboutSection;
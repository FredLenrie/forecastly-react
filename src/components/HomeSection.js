import React from 'react';
import './HomeSection.css';

const HomeSection = () => {
  return (
    <section id="home" className="home-section">
        {/* Text Section */}
        <div className="text-section">
          <h1>Hi! WELCOME TO<span> FORECASTLY</span></h1>
          <p>
          Get information about the weather and our services. Stay tuned for updates and weather forecasts tailored 
          to your needs. Enjoy the weather with Forecastly! Your trusted source for real-time weather updates.
          </p>

          <div className="home-buttons">
            <a href="#about">
              <button type="button" className="button">
                <span className="button-span"></span>LEARN MORE
              </button>
            </a>
            <a href="#how-it-works">
              <button type="button" className="button">
                <span className="button-span"></span>CHECK WEATHER
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <video autoPlay muted loop className="background-video">
            <source src={`${process.env.PUBLIC_URL}/background1.mp4`} type="video/mp4" />
          </video>
          <img src={`${process.env.PUBLIC_URL}/image.jpg`} className="img-2" alt="Overlapping Image" />
        </div>
    </section>
  );
};

export default HomeSection;
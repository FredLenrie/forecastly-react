import React, { useState, useEffect } from 'react';
import './HomeSection.css';

const HomeSection = () => {
  const images = [
    `${process.env.PUBLIC_URL}/image1.jpg`,
    `${process.env.PUBLIC_URL}/image2.jpg`,
    `${process.env.PUBLIC_URL}/image3.jpg`,
    `${process.env.PUBLIC_URL}/image4.jpg`,
    `${process.env.PUBLIC_URL}/image5.jpg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section id="home" className="home-section">
      {/* Image Slider Background */}
      <div className="background-slider">
        <img
          id="slider-img"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Semi-Transparent Overlay */}
      <div className="overlay"></div>

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
    </section>
  );
};

export default HomeSection;

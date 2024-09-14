import React, { useEffect, useState } from 'react';
import './HomeSection.css';

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '../../public/image1.jpg',
    '../../public/image2.jpg',
    '../../public/image3.jpg',
    '../../public/image4.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section id="home" className="home-section">
      <section className="image-slider">
        <img id="slider-img" src={images[currentIndex]} alt="Weather Image" />
      </section>

      <section className="text-content">
        <h1>WELCOME TO FORECASTLY</h1>
      </section>

      <div className="home-content">
        <p>
          Get information about the weather and our services. Stay tuned for updates and weather forecasts tailored to your needs. Enjoy the weather with Forecastly! Your trusted source for real-time weather updates.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;

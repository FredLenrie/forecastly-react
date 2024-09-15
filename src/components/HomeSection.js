import React, { useEffect, useState } from 'react';
import './HomeSection.css';

const HomeSection = () => {
  const images = [
    `${process.env.PUBLIC_URL}/image1.jpg`,
    `${process.env.PUBLIC_URL}/image2.jpg`,
    `${process.env.PUBLIC_URL}/image3.jpg`,
    `${process.env.PUBLIC_URL}/image4.jpg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section id="home" className="home-section">
      <section className="image-slider">
      <img
        id="slider-img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
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
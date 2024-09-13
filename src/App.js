import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div>
    <Header />
    <HomeSection />
    <AboutSection />
    <HowItWorksSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;

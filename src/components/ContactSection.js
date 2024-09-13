import React from 'react';
import './ContactSection.css';

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="usercoment">
      <h1 className="header">Share your comment with us!</h1>
      <input type="text" id="fname" placeholder="Enter your first name" required />
      <input type="email" id="email" placeholder="Enter your email address" required /><br /><br />
      <textarea id="textarea" placeholder="Enter your comment here" required></textarea><br /><br />
      <button type="submit">Submit</button>
    </div>
  </section>
);

export default ContactSection;

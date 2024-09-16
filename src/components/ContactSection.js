import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Here you would handle form submission, e.g., send data to a server

    // For now, we'll just show a thank you message
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="usercoment">
        {!submitted ? (
          <>
            <h1 className="header">Share your comment with us!</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="fname"
                placeholder="Enter your first name"
                value={formData.fname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              /><br /><br />
              <textarea
                id="comment"
                placeholder="Enter your comment here"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea><br /><br />
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h1>Thank You!</h1>
            <p>Your comment has been received. We appreciate your feedback!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

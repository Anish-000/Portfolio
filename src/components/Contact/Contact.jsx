import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 data-aos="fade-up">Let's take a cup of coffee and talk</h2>

      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <h3>Contact Information</h3>
          
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>(+91) 6294348178</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>anishchatto2002@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>Chakdaha, Nadia, West Bengal</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/Anish-000" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/anish-chattopadhyay-6659192b9" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/007_phoenix_007" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <h3>Send Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name"
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email"
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="tel" 
                placeholder="Your Phone"
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Address"
                required 
              />
            </div>

            <div className="form-group">
              <textarea 
                placeholder="Your Message"
                rows="5"
                required 
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
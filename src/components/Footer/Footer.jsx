import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" data-aos="fade-up">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
          <h3>Connect With Me</h3>
          <div className="footer-social">
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

        <div className="footer-section" data-aos="fade-up" data-aos-delay="400">
          <h3>Contact Info</h3>
          <p>Email: anishchatto2002@gmail.com</p>
          <p>Phone: (+91) 6294348178</p>
          <p>Location: Chakdaha, Nadia, West Bengal</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with <FaHeart className="heart-icon" /> by Anish Chattopadhyay</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
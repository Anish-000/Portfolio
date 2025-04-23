import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import headerImage from '../../assets/images/your-actual-image.jpg';

const Header = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const titles = ['Web Developer', 'Part Time Gamer', 'Programmer', 'Chess Player'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typing = setInterval(() => {
      if (currentIndex < titles[index].length) {
        currentText += titles[index][currentIndex];
        setText(currentText);
        currentIndex++;
      }
    }, 100);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <header id="home" className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Hi, I'm Anish Chattopadhyay
          </h1>
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            I'm a <span className="animated-text">{text}</span>
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
            Passionate MCA student turning ideas into reality through code. I'm eager to learn and grow in the tech industry. Love to play chess and football.
          </p>
          
          <div className="header-buttons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <button className="btn hire-btn">Hire Me</button>
            <button className="btn cv-btn">Download CV</button>
          </div>

          <div className="social-links" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
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

        <div className="header-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
          <img src={headerImage} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;

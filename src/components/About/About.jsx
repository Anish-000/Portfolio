import React, { useState } from 'react';
import './About.css';
import aboutImage from '../../assets/images/your-image.jpg';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
          <img src={aboutImage} alt="About Me" />
        </div>
        
        <div className="about-content" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
          <h2 data-aos="fade-up" data-aos-duration="800">About Me</h2>
          
          <div className="personal-info" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Anish Chattopadhyay</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">anishchatto2002@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Chakdaha, Nadia, West Bengal</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">(+91) 6294348178</span>
            </div>
            <div className="info-item">
              <span className="info-label">Degree:</span>
              <span className="info-value">Master of Computer Applications (Pursuing)</span>
            </div>
          </div>

          <div className="about-text">
            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Hello! I'm a passionate MCA student with a deep love for technology and innovation. 
              Currently pursuing my Master's in Computer Applications, I specialize in building 
              digital solutions that make a difference.
            </p>
            
            <div className={`extended-content ${showMore ? 'show' : ''}`}>
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                With a strong foundation in computer science and a creative mindset, 
                I bring together technical expertise and problem-solving skills. My journey 
                in technology began during my undergraduate studies, and since then, 
                I've been constantly learning and growing in this ever-evolving field.
              </p>
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                Outside of academics, I'm actively involved in coding communities and 
                tech meetups. I believe in the power of collaborative learning and 
                enjoy working on projects that challenge me to think outside the box.
              </p>
            </div>

            <button 
              className="read-more-btn"
              onClick={() => setShowMore(!showMore)}
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="800"
            >
              {showMore ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

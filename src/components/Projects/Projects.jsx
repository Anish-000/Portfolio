import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Thal from '../../assets/images/Thal.jpg';
import Donut from '../../assets/images/Donut.jpg';
import Quantum from '../../assets/images/Quantum.jpg';
import Portfolio from '../../assets/images/portfolio.jpg';
import reactjs from '../../assets/images/Certificate-react.jpg';
import thalc from '../../assets/images/Certificate-thal.jpg';
import cloudc from '../../assets/images/Cloud-certificate.jpg';
import cake from '../../assets/images/Cake.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Thalassemia Screening Device",
      category: "desktop",
      image: Thal,
      description: "My First Official Work for developing a screening device named Thalassemia Screening Device using Arduino Uno",
      technologies: ["Arduino Uno", "LCD", "Keyboard", "C++"],
      github: "https://github.com/Anish-000/Thalassemia-Screening-Device"
    },
    {
      title: "Quantum Cryptography",
      category: "desktop",
      image: Quantum,
      description: "This is my initial research into Quantum Computing and Quantum Cryptography, focusing on learning the fundamentals and understanding specific cryptographic algorithms like Saber and Kyber ",
      technologies: ["C", "C++", "Reserach-paper"],
      github: "https://github.com/Anish-000/Quantum-Cryptography"
    },
    {
      title: "Donut Website Frontend",
      category: "web",
      image: Donut,
      description: "A fully responsive Frontend Donut Website built using HTML, CSS, and JavaScript.The website provides user-friendly design, showcasing various donut varieties with interactive features.",
      technologies: ["HTML5", "CSS3","JavaScript"],
      github: "https://github.com/Anish-000/Donut-Frontend",
      live: "https://donut-frontend.vercel.app/"
    },
    {
      title: "Cake Website Frontend",
      category: "web",
      image: cake,
      description: "A fully responsive Frontend Cake Website built using React JS and CSS.The website provides user-friendly design, showcasing various cakes varieties with interactive features.",
      technologies: ["React JS", "CSS3"],
      github: "https://github.com/Anish-000/Sweet-Delights",
      live: "https://sweet-delights-wheat.vercel.app/"
    },
    {
      title: "Portfolio Website",
      category: "web",
      image: Portfolio,
      description: "Personal portfolio website showcasing projects and skills. I used ReactJS to create the portfolio.",
      technologies: ["React", "CSS3", "AOS"],
      github: "https://github.com/Anish-000/Portfolio",
      live: "https://anish-portfolio-plum.vercel.app/"
    },
    {
      title: "React JS Certificate",
      category: "certificates",
      image: reactjs,
      description: "Successfully completed the React JS for Beginners course offered by Simplilearn.This course provided a foundational understanding of key concepts such as components, JSX, props, and state management. ",
      technologies: ["React Component", "React Props", "React State"],
      github: "https://github.com/Anish-000/Portfolio/blob/main/src/assets/images/Certificate-react.jpg",
    },
    {
      title: "Thalassemia Screening Device Certificate",
      category: "certificates",
      image: thalc,
      description: "I obtained the Thalassemia Screening Device Certificate by developing the device named Thalassemia Screening Device which is my firts official work. ",
      technologies: ["Arduino Uno", "LCD", "Keyboard", "C++"],
      github: "https://github.com/Anish-000/Portfolio/blob/main/src/assets/images/Certificate-thal.jpg",
    },
    {
      title: "Cloud Engeneering Certificate",
      category: "certificates",
      image: cloudc,
      description: "Successfully completed the Introduction to Cloud Computing course offered by Simplilearn.This course provided a solid foundation in cloud concepts, service models and deployment types. ",
      technologies: ["SQL", "AWS", "Azure"],
      github: "https://github.com/Anish-000/Portfolio/blob/main/src/assets/images/Cloud-certificate.jpg",
    }
  ];

  const categories = ['all', 'web', 'mobile', 'desktop','certificates'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <h2 data-aos="fade-up">My Projects</h2>

      <div className="project-filters" data-aos="fade-up">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

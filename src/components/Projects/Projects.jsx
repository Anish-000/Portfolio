import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Thal from '../../assets/images/Thal.jpg';
import Donut from '../../assets/images/Donut.jpg';
import Quantum from '../../assets/images/Quantum.jpg';
import Portfolio from '../../assets/images/portfolio.jpg';

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
      description: "A responsive donut frontend website",
      technologies: ["HTML5", "CSS3","JavaScript"],
      github: "https://github.com/Anish-000/Donut-Frontend",
      live: "https://project3.com"
    },
    {
      title: "Portfolio Website",
      category: "web",
      image: Portfolio,
      description: "Personal portfolio website showcasing projects and skills.",
      technologies: ["React", "CSS3", "AOS"],
      github: "https://github.com/Anish-000/Portfolio",
      live: "https://project4.com"
    }
  ];

  const categories = ['all', 'web', 'mobile', 'desktop'];

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

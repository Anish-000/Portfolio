import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Website",
      category: "web",
      image: "/project1.jpg",
      description: "A full-stack e-commerce platform built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Anish-000/project1",
      live: "https://project1.com"
    },
    {
      title: "Student Management System",
      category: "desktop",
      image: "/project2.jpg",
      description: "Desktop application for managing student records, attendance, and performance tracking.",
      technologies: ["Java", "MySQL", "JavaFX"],
      github: "https://github.com/Anish-000/project2"
    },
    {
      title: "Weather App",
      category: "mobile",
      image: "/project3.jpg",
      description: "Mobile application that provides real-time weather updates with location tracking.",
      technologies: ["React Native", "Weather API"],
      github: "https://github.com/Anish-000/project3"
    },
    {
      title: "Portfolio Website",
      category: "web",
      image: "/project4.jpg",
      description: "Personal portfolio website showcasing projects and skills.",
      technologies: ["React", "CSS3", "AOS"],
      github: "https://github.com/Anish-000/Donut-Frontend",
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
import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiCplusplus, SiC } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, percentage: 80 },
    { name: 'CSS3', icon: <FaCss3Alt />, percentage: 75 },
    { name: 'JavaScript', icon: <SiJavascript />, percentage: 70 },
    { name: 'React', icon: <FaReact />, percentage: 70 },
    { name: 'Node.js', icon: <FaNodeJs />, percentage: 60 },
    { name: 'Python', icon: <FaPython />, percentage: 60 },
    { name: 'Java', icon: <FaJava />, percentage: 65 },
    { name: 'MongoDB', icon: <SiMongodb />, percentage: 60 },
    { name: 'SQL', icon: <FaDatabase />, percentage: 80 },
    { name: 'Git', icon: <FaGitAlt />, percentage: 60 },
    { name: 'C++', icon: <SiCplusplus />, percentage: 80 },
    { name: 'C', icon: <SiC />, percentage: 85 }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'University of Kalyani',
      year: '2025 - Present',
      description: 'Currently pursuing MCA with focus on advanced computing and software development.'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'University of Kalyani',
      year: '2021 - 2024',
      description: 'Completed BSc Computer Science with distinction, specializing in computer fundamentals and programming.'
    }
  ];

  const experience = [
    
    {
      position: 'Student Developer',
      company: 'KPC Team',
      year: 'Jan 2023 - May 2024',
      description: 'Developed and maintained college department website.'
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 data-aos="fade-up">My Skills</h2>

      <div className="skills-container">
        <div className="technical-skills" data-aos="fade-right">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                className="skill-box" 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-progress">
                    <div className="progress-circle">
                      <div className="progress-value">{skill.percentage}%</div>
                      <svg>
                        <circle className="progress-circle-bg" cx="30" cy="30" r="25"></circle>
                        <circle 
                          className="progress-circle-fill" 
                          cx="30" 
                          cy="30" 
                          r="25"
                          style={{
                            strokeDashoffset: `${157 - (157 * skill.percentage) / 100}`
                          }}
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-education">
          <div className="experience" data-aos="fade-left">
            <h3>Experience</h3>
            {experience.map((exp, index) => (
              <div 
                className="timeline-item" 
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 200}
              >
                <h4>{exp.position}</h4>
                <p className="company">{exp.company}</p>
                <p className="year">{exp.year}</p>
                <p className="description">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="education" data-aos="fade-left" data-aos-delay="200">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div 
                className="timeline-item" 
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 200}
              >
                <h4>{edu.degree}</h4>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
                <p className="description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

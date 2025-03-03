import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: 'deepak.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: '#',
      githubLink: 'https://github.com/'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates',
      image: 'project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveLink: '#',
      githubLink: 'https://github.com/'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my work and skills',
      image: 'project3.jpg',
      technologies: ['React', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: 'https://github.com/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="btn" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} className="btn secondary" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

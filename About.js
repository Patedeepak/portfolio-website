import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate Full Stack Developer with a strong foundation in web
            technologies and a keen eye for design. With experience in both front-end
            and back-end development, I create seamless, user-friendly applications
            that solve real-world problems.
          </p>
          <p>
            My expertise includes:
          </p>
          <ul>
            <li>Frontend Development (React, JavaScript, HTML, CSS)</li>
            <li>Backend Development (Node.js, Python)</li>
            <li>Database Management (MongoDB, SQL)</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="about-stats">
          <div className="stat">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

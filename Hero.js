import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">DEEPAK KUMAR PATEL</span></h1>
        <p className="subtitle">Frontend Developer</p>
        <p className="description">
          I create beautiful and functional websites with a focus on user experience
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <img src="/images/deepak.png"alt="Deepak Kumar Patel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import profilePhoto from '../assets/profile.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <img src={profilePhoto} alt="Dr. Yerrapati Venkata Subbaiah" className="profile-photo" />
      <div className="home-content">
        <h1 className="name">Yerrapati Venkata Subbaiah</h1>
        <p className="intro">
          I am a research scholar specializing in representation theory, symmetric groups, and applications of Lie algebras in signal processing. I am currently exploring various approaches in these fields to advance the understanding of group symmetries.
        </p>
        <p>Research Interests:</p>
        <ul>
          <li>Representation Theory</li>
          <li>Symmetric Groups</li>
          <li>Lie Algebras</li>
          <li>Signal Processing with Lie Group Symmetries</li>
        </ul>
        
        <p>Current Projects:</p>
        <ul>
          <li>Exploring conjugation properties in symmetric groups</li>
          <li>Analyzing the role of Lie algebras in signal processing</li>
          <li>Studying involution structures and applications in group theory</li>
        </ul>

        <Link to="/contact" className="contact-button">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Home;

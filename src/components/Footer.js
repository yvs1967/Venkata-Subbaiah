import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Yerrapati Venkata Subbaiah</p>
      <div>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;

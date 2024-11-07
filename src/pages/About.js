import React from 'react';
import './About.css'; // Ensure this import points to your CSS file

const About = () => {
  return (
    <div className="about-content">
      {/* <img src="/path/to/your/photo1.jpg" alt="Personal" className="about-image" /> */}
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          {/* Hello! I'm a passionate research scholar focusing on representation theory, symmetric groups, and Lie algebras. My journey in mathematics has been an exciting adventure, driven by curiosity and a desire to explore the depths of abstract structures. */}
          Hello! Welcome, I am a person, trying to understand the geometry around, through mathematical structures and representation theory such as symmetric groups, Lie Algebras.
        </p>
        <p>
          My academic path began with a strong foundation in mathematics during my undergraduate studies. Since then, I have cultivated a love for group theory, uncovering its intricate relationships and applications. Along the way, I've engaged in various research projects that have honed my analytical skills and deepened my appreciation for the beauty of mathematics.
        </p>
        <h3>Academic Background</h3>
        <div className='academics-background'>
          <ul>
            <li>Integrated Master of Science in Mathematics (2020-25) - [SVNIT]</li>
          </ul>
        </div>
      </div>
      <div className='experiences'>
        <h3>Previous Internships & Research Experiences</h3>
          <ul>
            <li>Summer Research Intern - [Institution Name], focusing on applications of group theory in mathematical modeling.</li>
            <li>Research Assistant - [Institution Name], working on representation theory and its computational aspects.</li>
          </ul>
          <blockquote>
            “Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.” – William Paul Thurston
          </blockquote>
      </div>
      <div className="fun-section">
        <h3>Fun</h3>
        <p>Outside of research, I enjoy:</p>
        <ul>
          <li>Photography, especially capturing nature scenes</li>
          <li>Cycling, Walking</li>
          <li>Crocheting, Composing Music</li>
          <li>Playing with Technology</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

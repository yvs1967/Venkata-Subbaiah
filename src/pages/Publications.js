import React from 'react';
import './Publication.css';

const Publications = () => {
  return (
    <div className="page-container">
      <h2>Publications</h2>

      <div className="publications-section">
        {/* Publication 1 */}
        <div className="publication-item">
          <a href="https://example.com/paper1" target="_blank" rel="noopener noreferrer" className="publication-title">
            On the Sum of degrees of all Irreducible Representations and Involutions of an Automorphism
            <span className='status'>(In-Preparation)</span>
          </a>
          <p className="publication-authors">Author A, Author B, Author C</p>
          <p className="publication-description">
            This paper explores the relationship between degress of Irreducible Representation and Involutions of automorphisms symmetric groups.
          </p>
        </div>

        {/*Publication 2*/}
        <div className="publication-item">
          <a href="https://example.com/paper2" target="_blank" rel="noopener noreferrer" className="publication-title">
            Can we contruct the Representations using Divisorial Filtrations?
            <span className='status'>(On-Going)</span>
          </a>
          <p className="publication-authors">Author X, Author Y</p>
          <p className="publication-description">
            Exploring the potential of construction of representation using divisorial filtrations.
          </p>
        </div>

        {/* Add more publications as needed */}
      </div>
    </div>
  );
};

export default Publications;


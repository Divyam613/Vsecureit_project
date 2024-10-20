// FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="grid">
          <div className="feature-card">
            <img src="feature-icon-1.png" alt="Feature Icon" />
            <h3>Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
          <div className="feature-card">
            <img src="feature-icon-2.png" alt="Feature Icon" />
            <h3>Feature 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
          <div className="feature-card">
            <img src="feature-icon-3.png" alt="Feature Icon" />
            <h3>Feature 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
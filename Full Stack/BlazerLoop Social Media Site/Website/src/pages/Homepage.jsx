// src/pages/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="home-page">
      <main className="main-content">
        <h1 className="title animate-slide-up delay-1">
          Welcome to <span className="highlight">BlazerLoop</span>
        </h1>
        <p className="subtitle animate-slide-up delay-3">
          Your UAB Tech Student Hub 
        </p>
        <p className="subtitle2 animate-slide-up delay-3">
        stay <span className="highlight">connected</span>, stay <span className="highlight">informed</span>, stay in the <span className="highlight2">loop</span>.
        </p>
        <Link to="/about" className="cta-button animate-slide-up delay-4">
          Learn More
        </Link>
      </main>
    </div>
  );
}

export default HomePage;

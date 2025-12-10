import React from 'react';
import './about.css';
import aboutImage from '../Images/gold_logo.png';

export default function About() {
  return (
    <div className="about-page fade-slide-in">
      <h1>About BlazerLoop</h1>
      <img src={aboutImage} alt="About BlazerLoop" className="about-image fade-slide-in delay-1" />
      <div className="about-info fade-slide-in delay-3">
        <p>
          BlazerLoop is a social platform designed specifically for UAB students, providing a unique space to connect, collaborate, and share resources. It was developed in the Spring of 2025 as a project for CS499.

        </p>
        <p>
          With features like class ratings, project collaboration, and instant messaging, BlazerLoop is the a great resource for computer science students at UAB.
        </p>
        <br />
        <h2>Creators</h2>
        <p>
            Brandi English 
        <br />Brianna Grayson
        <br />Connor Guess
        <br />Jenna Wade
        <br />Wasema Ore
        <br />Xavier Passmore</p>
      </div>
    </div>
  );
}
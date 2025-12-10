// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Images/logo.png'; // adjust path as needed
import { FaHome, FaStar, FaUser, FaFolder, FaComments, FaSignInAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <aside className="sidebar">
    <Link to="/">
    <img src={logo} alt="Logo" className="small-img" />
    </Link>
      <nav>
        <ul className="nav-list">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/class-ratings"><FaStar /> Class Ratings</Link></li>
          <li><Link to="/profile"><FaUser /> Profile</Link></li>
          <li><Link to="/projects"><FaFolder /> Projects</Link></li>
          <li><Link to="/messages"><FaComments /> Messages</Link></li>
          <li><Link to="/signup"><FaSignInAlt /> Sign Up</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './ClassRatings.css';

function ClassRatingsPage() {
  const classes = ['CS101', 'CS201', 'CS303', 'CS499'];

  return (
    <div className="class-ratings-page">
      <main className="main-content">
        <h1 className="title">Class Ratings</h1>
        <ul className="class-list">
          {classes.map((course) => (
            <li key={course} className="class-item">
              <Link to={`/class-ratings/${course}`}>{course}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ClassRatingsPage;

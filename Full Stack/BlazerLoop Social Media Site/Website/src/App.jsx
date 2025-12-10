import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ClassRatings from './pages/ClassRatings.jsx';
import ClassReview from './pages/ClassReview.jsx';
import SignupPage from './pages/SignupPage.jsx';
import Header from './components/Header.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import About from './pages/about.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/class-ratings" element={<ClassRatings />} />
          <Route path="/class-ratings/:classId" element={<ClassReview />} />  {/* Fixed route for ClassReview with dynamic classId */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/signin" element={<SignupPage />} />
          <Route path="/about" element={<About />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

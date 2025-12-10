import React, { useState, useEffect } from 'react';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [collaboratorUsername, setCollaboratorUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const currentUser = localStorage.getItem('user') 
  ? JSON.parse(localStorage.getItem('user')).Username
  : null;


  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://o7i1a42e0l.execute-api.us-east-2.amazonaws.com/projects', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to fetch projects');

      const formattedProjects = data.map((project) => ({
        name: project.name,
        description: project.Info,
        collaborators:  project.collaborators ?? [],
      }));

      setProjects(formattedProjects);
    } catch (err) {
      console.error('Fetch error:', err);
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();

    if (!newProject.name.trim() || !newProject.description.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://o7i1a42e0l.execute-api.us-east-2.amazonaws.com/projects', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: `PROJ-${Date.now()}`,
          name: newProject.name,
          Info: newProject.description,
          collaborators: [],
        }),
      });

      // Debugging response status and body
      const data = await response.json();
      console.log('Response Data:', data); // Log the response data

      if (!response.ok) {
        console.error('API Error:', data); // Log any errors
        throw new Error(data.message || 'Failed to create project');
      }

      // Successfully created, refresh project list
      await fetchProjects(); // Refresh from server
      setNewProject({ name: '', description: '' });
      setShowForm(false);
    } catch (err) {
      console.error('Create error:', err);
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };


  const handleDeleteProject = async (index) => {
    const projectToDelete = projects[index];
    setIsLoading(true);
    try {
      const response = await fetch(`https://o7i1a42e0l.execute-api.us-east-2.amazonaws.com/projects`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: projectToDelete.name,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete project');

      await fetchProjects(); // Always fetch updated projects
    } catch (err) {
      console.error('Delete error:', err);
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageCollaboratorsClick = (index) => {
    setSelectedProjectIndex(index);
    setShowModal(true);
  };

  const handleCollabInputChange = (e) => {
    setCollaboratorUsername(e.target.value);
  };

  const handleAddCollaborator = () => {
    const username = collaboratorUsername.trim();
    if (!username) return;

    const updatedProjects = [...projects];
    const project = updatedProjects[selectedProjectIndex];

    if (!project.collaborators.includes(username)) {
      project.collaborators.push(username);
    }

    setProjects(updatedProjects);
    setCollaboratorUsername('');
  };

  const handleCancelModal = () => {
    setShowModal(false);
    setCollaboratorUsername('');
  };


  if (!currentUser) {
    return (
      <div className="auth-overlay">
        <div className="auth-container">
          <div className="auth-logo">💬</div>
          <h1 className="auth-title">To Check Out Projects Sign In or Sign Up </h1>
          <p className="auth-subtitle">Stay in the Loop !</p>
          
          <div className="auth-buttons">
            <Link to="/signup" className="auth-btn auth-btn-primary">
              Sign In or Sign Up !
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page fade-slide-in">
      <main className="projects-container fade-slide-in">
        <h1 className="projects-title">Check out Projects Being Built By UAB Students!</h1>

        <button className="refresh-btn fade-slide-in" onClick={fetchProjects} disabled={isLoading}>
          {isLoading ? 'Refreshing...' : '↻ Refresh Projects'}
        </button>

        {!showForm && (
          <button className="create-btn fade-slide-in" onClick={() => setShowForm(true)} disabled={isLoading}>
            + Create New Project
          </button>
        )}

        {showForm && (
          <form className="project-form" onSubmit={handleCreateProject}>
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={newProject.name}
              onChange={handleInputChange}
              className="edit-input"
              required
              disabled={isLoading}
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={newProject.description}
              onChange={handleInputChange}
              className="edit-textarea"
              disabled={isLoading}
            />
            <div className="form-buttons">
              <button type="submit" className="save-btn" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save Project'}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="projects-list">
          {projects.length === 0 ? (
            <p className="no-projects">You don’t have any projects yet.</p>
          ) : (
            projects.map((project, index) => (
              <div key={index} className="project-card fade-slide-in" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                <>
                  <h2 className="project-name">{project.name}</h2>
                  <p className="project-description">{project.description}</p>
                  {Array.isArray(project.collaborators) && project.collaborators.length > 0 && (
  <div className="collab-list">
    <p><strong>Members:</strong> {project.collaborators.join(', ')}</p>
  </div>
)}

                  <div className="card-buttons">
                    <button className="collab-btn" onClick={() => handleManageCollaboratorsClick(index)}>
                      Join  Project
                    </button>
                  </div>
                </>
              </div>
            ))
          )}
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Manage Collaborators</h3>
            <input
              type="text"
              placeholder="Enter username"
              value={collaboratorUsername}
              onChange={handleCollabInputChange}
              className="edit-input"
            />
            <button className="save-btn" onClick={handleAddCollaborator}>Add</button>

            <h4>Current Collaborators:</h4>
            <ul className="collab-list-modal">
              {projects[selectedProjectIndex]?.collaborators.map((collab, i) => (
                <li key={i} className="collab-item">
                  {collab}
                </li>
              ))}
            </ul>

            <div className="form-buttons">
              <button className="cancel-btn" onClick={handleCancelModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;

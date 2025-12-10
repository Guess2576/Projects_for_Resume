import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import placeholderImg from '../Images/DefaultPic.png';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newBio, setNewBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setNewBio(storedUser.bio || '');
    } else {
      window.location.href = '/signin';
    }
  }, []);

  const handleSave = () => {
    const updatedUser = { ...user, bio: newBio };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page fade-slide-in">
      <h1>Profile Page</h1>

      <div className="profile-picture-container">
        <img
          src={profilePic || placeholderImg}
          alt="Profile"
          className="profile-picture"
        />
        {isEditing && (
          <input type="file" accept="image/*" onChange={handlePictureChange} />
        )}
      </div>

      <div className="profile-info-container">
        <div className="profile-info">
          <p><strong>Username:</strong> {user.Username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {isEditing ? (
            <>
              <label htmlFor="bio"><strong>Bio:</strong></label>
              <textarea
                id="bio"
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className="edit-bio-textarea"
              />
              <div className="edit-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p><strong>Bio:</strong> {user.bio}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
        </div>
      </div>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/signin';
        }}
      >
        Log Out
      </button>
    </div>
  );
}
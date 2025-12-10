// src/pages/MessagesPage.jsx
import React, { useState, useEffect } from 'react';
import './MessagesPage.css';
import { Link } from 'react-router-dom';

const API_BASE = 'https://q1vnye5qdc.execute-api.us-east-2.amazonaws.com/dev';

export default function MessagesPage() {
  const [contacts, setContacts] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // LOCAL: Loads usernames from browser's local storage for persistent contact history
  const [chatHistoryUsers, setChatHistoryUsers] = useState(() => {
    const saved = localStorage.getItem('chatHistoryUsers');
    return saved ? JSON.parse(saved) : [];
  });
  
  // LOCAL: Gets the currently logged-in user's username from local storage
  const currentUser = localStorage.getItem('user') 
    ? JSON.parse(localStorage.getItem('user')).Username
    : null;

  useEffect(() => {
    if (!currentUser) return;

    const loadContacts = async () => {
      try {
        const response = await fetch(`${API_BASE}/users`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        const profiles = Array.isArray(data) ? data : 
                        data.profiles || data.users || data.items || [];
        
        const normalizedContacts = profiles.map(contact => ({
          ...contact,
          username: contact.Username || contact.username || 
                   (contact.email ? contact.email.split('@')[0] : `user_${contact.id}`),
          id: contact.id || `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        }));
        
        setContacts(normalizedContacts);
      } catch (err) {
        console.error('Failed to load contacts:', err);
        setError('Failed to load contacts. Please refresh.');
      }
    };

    loadContacts();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser || !selectedUser) return;

    const loadMessages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/messages?userA=${currentUser}&userB=${selectedUser}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const messagesArray = Array.isArray(data) ? data : data.messages || [];

        setMessages(prev => ({
          ...prev,
          [selectedUser]: messagesArray
        }));
      } catch (err) {
        console.error('Failed to load messages:', err);
        setError('Failed to load messages');
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
    const interval = setInterval(loadMessages, 15000);
    return () => clearInterval(interval);
  }, [selectedUser, currentUser]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!currentUser || !newMessage.trim() || !selectedUser) return;

    const message = {
      from: currentUser,
      to: selectedUser,
      text: newMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => ({
      ...prev,
      [selectedUser]: [...(prev[selectedUser] || []), message]
    }));
    setNewMessage('');

    // LOCAL: Updates chat history list and stores it in localStorage
    if (!chatHistoryUsers.includes(selectedUser)) {
      const updatedHistory = [...chatHistoryUsers, selectedUser];
      setChatHistoryUsers(updatedHistory);
      localStorage.setItem('chatHistoryUsers', JSON.stringify(updatedHistory));
    }

    try {
      const response = await fetch(`${API_BASE}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });

      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.status}`);
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to send message');
      setMessages(prev => ({
        ...prev,
        [selectedUser]: (prev[selectedUser] || []).filter(m => m.timestamp !== message.timestamp)
      }));
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const username = contact.username || '';
    const matchesSearch = searchQuery && username.toLowerCase().includes(searchQuery.toLowerCase().trim());
    const hasMessagedBefore = messages[username] && messages[username].length > 0;
    const isInHistory = chatHistoryUsers.includes(username);
    return matchesSearch || hasMessagedBefore || isInHistory;
  });

  if (!currentUser) {
    return (
      <div className="auth-overlay">
        <div className="auth-container">
          <div className="auth-logo">💬</div>
          <h1 className="auth-title">Welcome to Messenger</h1>
          <p className="auth-subtitle">Sign in to start chatting</p>
          
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
    <div className="messages-page">
      <aside className="messages-sidebar fade-slide-in">
        <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {error && <div className="error-message">{error}</div>}
        <ul>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <li
                key={contact.id}
                className={contact.username === selectedUser ? 'active' : ''}
                onClick={() => {
                  setSelectedUser(contact.username);
                  setSearchQuery('');
                  setError(null);
                
                  // LOCAL: Also updates chat history when contact is selected (click)
                  if (!chatHistoryUsers.includes(contact.username)) {
                    const updatedHistory = [...chatHistoryUsers, contact.username];
                    setChatHistoryUsers(updatedHistory);
                    localStorage.setItem('chatHistoryUsers', JSON.stringify(updatedHistory));
                  }
                }}
              >
                {contact.username}
              </li>
            ))
          ) : (
            <div className="no-contacts">
              {searchQuery ? 'No matching users found' : 'No recent chats'}
            </div>
          )}
        </ul>
      </aside>

      <section className="chat-area">
        {selectedUser ? (
          <>
            <div className="messages">
              {isLoading ? (
                <div className="loading">Loading messages...</div>
              ) : (messages[selectedUser] || []).length > 0 ? (
                (messages[selectedUser] || []).map((msg, i) => {
                  const isCurrentUser = msg.from === currentUser;
                  return (
                    <div key={i} className={`message-row ${isCurrentUser ? 'sent' : 'received'}`}>
                      {!isCurrentUser && <img src="/avatar-user.png" alt="User avatar" className="avatar" />}
                      <div className="message-bubble">
                        <p>{msg.text}</p>
                        <span className="message-time">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      {isCurrentUser && <img src="/avatar-me.png" alt="My avatar" className="avatar" />}
                    </div>
                  );
                })
              ) : (
                <div className="no-messages">
                  {error ? 'Error loading messages' : 'No messages yet'}
                </div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="message-input">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={`Message ${selectedUser}...`}
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !newMessage.trim()}>
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </>
        ) : (
          <div className="empty-chat">
            <div className="empty-icon">💬</div>
            <h3>No chat selected</h3>
            <p>{contacts.length ? 'Select a user to start chatting' : 'No contacts available'}</p>
          </div>
        )}
      </section>
    </div>
  );
}

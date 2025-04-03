import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-title">
        <h1>Dashboard Overview</h1>
      </div>
      <div className="navbar-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">🔍</button>
        </div>
        <div className="theme-toggle">
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
            <span className="slider round"></span>
          </label>
          <span className="toggle-label">{darkMode ? 'Dark' : 'Light'} Mode</span>
        </div>
        <div className="user-profile">
          <div className="avatar">👤</div>
          <span className="username">Admin User</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 
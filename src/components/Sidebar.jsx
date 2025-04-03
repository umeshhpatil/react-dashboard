import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ darkMode, activeTab, onTabChange }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleTabClick = (tabId, e) => {
    e.preventDefault();
    onTabChange(tabId);
    if (window.innerWidth <= 768) {
      setExpanded(false);
    }
  };

  return (
    <div className={`sidebar ${darkMode ? 'dark' : 'light'} ${expanded ? 'expanded' : ''}`}>
      <div className="logo">
        <h2>Dashboard</h2>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {expanded ? '✖' : '☰'}
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={activeTab === 'dashboard' ? 'active' : ''}>
            <a href="#dashboard" onClick={(e) => handleTabClick('dashboard', e)}>
              <i className="icon">📊</i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className={activeTab === 'analytics' ? 'active' : ''}>
            <a href="#analytics" onClick={(e) => handleTabClick('analytics', e)}>
              <i className="icon">📈</i>
              <span>Analytics</span>
            </a>
          </li>
          <li className={activeTab === 'customers' ? 'active' : ''}>
            <a href="#customers" onClick={(e) => handleTabClick('customers', e)}>
              <i className="icon">👥</i>
              <span>Customers</span>
            </a>
          </li>
          <li className={activeTab === 'orders' ? 'active' : ''}>
            <a href="#orders" onClick={(e) => handleTabClick('orders', e)}>
              <i className="icon">🛒</i>
              <span>Orders</span>
            </a>
          </li>
          <li className={activeTab === 'products' ? 'active' : ''}>
            <a href="#products" onClick={(e) => handleTabClick('products', e)}>
              <i className="icon">📦</i>
              <span>Products</span>
            </a>
          </li>
          <li className={activeTab === 'settings' ? 'active' : ''}>
            <a href="#settings" onClick={(e) => handleTabClick('settings', e)}>
              <i className="icon">⚙️</i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>© 2024 Dashboard</p>
      </div>
    </div>
  );
};

export default Sidebar; 
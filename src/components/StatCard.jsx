import React from 'react';
import '../styles/StatCard.css';

const StatCard = ({ title, value, icon, percentChange, darkMode }) => {
  const isPositive = percentChange >= 0;
  
  return (
    <div className={`stat-card ${darkMode ? 'dark' : 'light'}`}>
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-info">
        <h3 className="stat-title">{title}</h3>
        <div className="stat-value">{value}</div>
        <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(percentChange)}% from last month
        </div>
      </div>
    </div>
  );
};

export default StatCard; 
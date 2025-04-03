import React from 'react';
import '../styles/CustomerTable.css';

const CustomerTable = ({ customers, darkMode }) => {
  return (
    <div className={`customer-table-container ${darkMode ? 'dark' : 'light'}`}>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Join Date</th>
            <th>Total Spent</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>
                <div className="customer-info">
                  <div className="customer-avatar">{customer.avatar}</div>
                  <div className="customer-name">{customer.name}</div>
                </div>
              </td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>{customer.joinDate}</td>
              <td>${customer.totalSpent.toFixed(2)}</td>
              <td>
                <span className={`status-badge ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable; 
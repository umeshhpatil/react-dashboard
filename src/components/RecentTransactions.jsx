import React from 'react';
import '../styles/RecentTransactions.css';

const RecentTransactions = ({ transactions, darkMode }) => {
  return (
    <div className={`transactions-table-container ${darkMode ? 'dark' : 'light'}`}>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>#{transaction.id}</td>
              <td>
                <div className="customer-info">
                  <div className="customer-avatar">{transaction.customerInitial}</div>
                  <div className="customer-name">{transaction.customer}</div>
                </div>
              </td>
              <td>{transaction.date}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>
                <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions; 
import React from 'react';
import '../styles/OrderTable.css';

const OrderTable = ({ orders, darkMode }) => {
  return (
    <div className={`order-table-container ${darkMode ? 'dark' : 'light'}`}>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                <div className="customer-info">
                  <div className="customer-avatar">{order.customerInitial}</div>
                  <div className="customer-name">{order.customer}</div>
                </div>
              </td>
              <td>{order.date}</td>
              <td>{order.items}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable; 
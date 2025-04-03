import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, 
  XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, 
  PieChart, Pie, Cell, 
  ResponsiveContainer, 
  LineChart, Line, 
  AreaChart, Area 
} from 'recharts';
import StatCard from './StatCard';
import RecentTransactions from './RecentTransactions';
import CustomerTable from './CustomerTable';
import OrderTable from './OrderTable';
import ProductTable from './ProductTable';
import '../styles/Dashboard.css';

// Sample data for charts and stats
import { salesData, productData, statData, transactionData, customerData, orderData, productInventoryData } from '../data/mockData';

const Dashboard = ({ darkMode, activeTab }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Search states
  const [customerSearch, setCustomerSearch] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(customerData);
  
  const [orderSearch, setOrderSearch] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orderData);
  
  const [productSearch, setProductSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productInventoryData);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Filter customers based on search input
  useEffect(() => {
    if (customerSearch.trim() === '') {
      setFilteredCustomers(customerData);
    } else {
      const searchTerm = customerSearch.toLowerCase();
      const filtered = customerData.filter(customer => 
        customer.name.toLowerCase().includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm) ||
        customer.phone.toLowerCase().includes(searchTerm) ||
        customer.location.toLowerCase().includes(searchTerm)
      );
      setFilteredCustomers(filtered);
    }
  }, [customerSearch]);
  
  // Filter orders based on search input
  useEffect(() => {
    if (orderSearch.trim() === '') {
      setFilteredOrders(orderData);
    } else {
      const searchTerm = orderSearch.toLowerCase();
      const filtered = orderData.filter(order => 
        order.id.toLowerCase().includes(searchTerm) ||
        order.customer.toLowerCase().includes(searchTerm) ||
        order.status.toLowerCase().includes(searchTerm) ||
        order.paymentMethod.toLowerCase().includes(searchTerm)
      );
      setFilteredOrders(filtered);
    }
  }, [orderSearch]);
  
  // Filter products based on search input
  useEffect(() => {
    if (productSearch.trim() === '') {
      setFilteredProducts(productInventoryData);
    } else {
      const searchTerm = productSearch.toLowerCase();
      const filtered = productInventoryData.filter(product => 
        product.id.toLowerCase().includes(searchTerm) ||
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    }
  }, [productSearch]);

  const renderDashboardContent = () => {
    return (
      <>
        <div className="stats-container">
          <StatCard 
            title="Total Users" 
            value={statData.totalUsers} 
            icon="👥" 
            percentChange={12.5} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Total Revenue" 
            value={`$${statData.totalRevenue.toLocaleString()}`} 
            icon="💰" 
            percentChange={8.2} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Total Orders" 
            value={statData.totalOrders} 
            icon="🛒" 
            percentChange={-3.4} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Conversion Rate" 
            value={`${statData.conversionRate}%`} 
            icon="📈" 
            percentChange={5.1} 
            darkMode={darkMode}
          />
        </div>

        <div className="charts-container">
          <div className="chart-card">
            <h3>Monthly Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={salesData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="target" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Product Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={windowWidth < 500 ? 80 : 100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="transactions-container">
          <h3>Recent Transactions</h3>
          <RecentTransactions transactions={transactionData} darkMode={darkMode} />
        </div>
      </>
    );
  };

  const renderAnalyticsContent = () => {
    return (
      <>
        <div className="stats-container">
          <StatCard 
            title="Conversion Rate" 
            value={`${statData.conversionRate}%`} 
            icon="📈" 
            percentChange={5.1} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Avg. Order Value" 
            value={`$${(statData.totalRevenue / statData.totalOrders).toFixed(2)}`} 
            icon="💵" 
            percentChange={3.8} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Customer Retention" 
            value="68.4%" 
            icon="🔄" 
            percentChange={2.5} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Cart Abandonment" 
            value="32.7%" 
            icon="🛒" 
            percentChange={-1.2} 
            darkMode={darkMode}
          />
        </div>

        <div className="charts-container">
          <div className="chart-card">
            <h3>Sales Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={salesData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="target" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Revenue Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={salesData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
  };

  const renderCustomersContent = () => {
    return (
      <>
        <div className="page-header">
          <h2>Customers</h2>
          <div className="header-actions">
            <button className="action-button">Add Customer</button>
            <div className="search-field">
              <input 
                type="text" 
                placeholder="Search customers..." 
                value={customerSearch}
                onChange={(e) => setCustomerSearch(e.target.value)}
              />
              <button onClick={() => setCustomerSearch('')}>
                {customerSearch ? '✖' : '🔍'}
              </button>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <StatCard 
            title="Total Customers" 
            value={customerData.length} 
            icon="👥" 
            percentChange={12.5} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Active Customers" 
            value={customerData.filter(c => c.status === 'Active').length} 
            icon="✅" 
            percentChange={8.2} 
            darkMode={darkMode}
          />
          <StatCard 
            title="New Customers" 
            value="156" 
            icon="🆕" 
            percentChange={24.8} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Avg. Customer Value" 
            value={`$${(customerData.reduce((sum, c) => sum + c.totalSpent, 0) / customerData.length).toFixed(2)}`} 
            icon="💰" 
            percentChange={5.1} 
            darkMode={darkMode}
          />
        </div>

        <div className="data-container">
          {filteredCustomers.length > 0 ? (
            <CustomerTable customers={filteredCustomers} darkMode={darkMode} />
          ) : (
            <div className="no-results">No customers match your search criteria</div>
          )}
        </div>
      </>
    );
  };

  const renderOrdersContent = () => {
    return (
      <>
        <div className="page-header">
          <h2>Orders</h2>
          <div className="header-actions">
            <button className="action-button">Create Order</button>
            <div className="search-field">
              <input 
                type="text" 
                placeholder="Search orders..." 
                value={orderSearch}
                onChange={(e) => setOrderSearch(e.target.value)}
              />
              <button onClick={() => setOrderSearch('')}>
                {orderSearch ? '✖' : '🔍'}
              </button>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <StatCard 
            title="Total Orders" 
            value={orderData.length} 
            icon="🛒" 
            percentChange={7.5} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Delivered" 
            value={orderData.filter(o => o.status === 'Delivered').length} 
            icon="✅" 
            percentChange={12.2} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Processing" 
            value={orderData.filter(o => o.status === 'Processing').length} 
            icon="⏳" 
            percentChange={-3.4} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Revenue" 
            value={`$${orderData.reduce((sum, o) => sum + o.total, 0).toFixed(2)}`} 
            icon="💰" 
            percentChange={5.1} 
            darkMode={darkMode}
          />
        </div>

        <div className="data-container">
          {filteredOrders.length > 0 ? (
            <OrderTable orders={filteredOrders} darkMode={darkMode} />
          ) : (
            <div className="no-results">No orders match your search criteria</div>
          )}
        </div>
      </>
    );
  };

  const renderProductsContent = () => {
    return (
      <>
        <div className="page-header">
          <h2>Products</h2>
          <div className="header-actions">
            <button className="action-button">Add Product</button>
            <div className="search-field">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
              />
              <button onClick={() => setProductSearch('')}>
                {productSearch ? '✖' : '🔍'}
              </button>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <StatCard 
            title="Total Products" 
            value={productInventoryData.length} 
            icon="📦" 
            percentChange={4.5} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Categories" 
            value={new Set(productInventoryData.map(p => p.category)).size} 
            icon="🏷️" 
            percentChange={0} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Avg. Price" 
            value={`$${(productInventoryData.reduce((sum, p) => sum + p.price, 0) / productInventoryData.length).toFixed(2)}`} 
            icon="💲" 
            percentChange={2.3} 
            darkMode={darkMode}
          />
          <StatCard 
            title="Low Stock" 
            value={productInventoryData.filter(p => p.stock <= 20).length} 
            icon="⚠️" 
            percentChange={-12.1} 
            darkMode={darkMode}
          />
        </div>

        <div className="data-container">
          {filteredProducts.length > 0 ? (
            <ProductTable products={filteredProducts} darkMode={darkMode} />
          ) : (
            <div className="no-results">No products match your search criteria</div>
          )}
        </div>
      </>
    );
  };

  const renderSettingsContent = () => {
    return (
      <div className="tab-content">
        <div className="settings-container">
          <h2>Settings</h2>
          
          <div className="settings-section">
            <h3>User Profile</h3>
            <div className="settings-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" defaultValue="Admin User" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="admin@example.com" />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select defaultValue="admin">
                  <option value="admin">Administrator</option>
                  <option value="manager">Manager</option>
                  <option value="analyst">Analyst</option>
                </select>
              </div>
              <button className="action-button">Update Profile</button>
            </div>
          </div>
          
          <div className="settings-section">
            <h3>Notifications</h3>
            <div className="settings-option">
              <label>
                <input type="checkbox" defaultChecked />
                Email Notifications
              </label>
            </div>
            <div className="settings-option">
              <label>
                <input type="checkbox" defaultChecked />
                Order Updates
              </label>
            </div>
            <div className="settings-option">
              <label>
                <input type="checkbox" defaultChecked />
                New Customer Alerts
              </label>
            </div>
            <div className="settings-option">
              <label>
                <input type="checkbox" />
                Marketing Communications
              </label>
            </div>
          </div>
          
          <div className="settings-section">
            <h3>Appearance</h3>
            <div className="settings-option">
              <label>
                <input 
                  type="checkbox" 
                  checked={darkMode} 
                  onChange={() => {}} 
                  disabled 
                />
                Dark Mode (Set from top navbar)
              </label>
            </div>
            <div className="settings-option">
              <label>Density</label>
              <select defaultValue="compact">
                <option value="compact">Compact</option>
                <option value="comfortable">Comfortable</option>
                <option value="spacious">Spacious</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboardContent();
      case 'analytics':
        return renderAnalyticsContent();
      case 'customers':
        return renderCustomersContent();
      case 'orders':
        return renderOrdersContent();
      case 'products':
        return renderProductsContent();
      case 'settings':
        return renderSettingsContent();
      default:
        return renderDashboardContent();
    }
  };

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : 'light'}`}>
      {renderContent()}
    </div>
  );
};

export default Dashboard; 
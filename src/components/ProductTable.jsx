import React from 'react';
import '../styles/ProductTable.css';

const ProductTable = ({ products, darkMode }) => {
  return (
    <div className={`product-table-container ${darkMode ? 'dark' : 'light'}`}>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td className="product-name">{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="rating">
                  <span className="stars">
                    {Array(5).fill().map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                        ★
                      </span>
                    ))}
                  </span>
                  <span className="rating-value">{product.rating.toFixed(1)}</span>
                </div>
              </td>
              <td>
                <span className={`status-badge ${product.stock > 20 ? 'in-stock' : 'low-stock'}`}>
                  {product.stock > 20 ? 'In Stock' : 'Low Stock'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable; 
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">AgriconAB</div>
        <nav className="nav">
          <ul>
            <li>Products <span>&#9662;</span></li>
            <li>Services <span>&#9662;</span></li>
            <li>About us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search ..." />
          <div className="cart-icon">
            <span role="img" aria-label="cart">🛒</span>
            <span className="badge">4</span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="promo-section">
          <h2>Global Excellence in Every Shipment</h2>
          <h1>Choose Your Healthy Life</h1>
          <p>Elite Import/Export of Fresh Fruits, Nutritious Grains, Millets, and Quality Vegetables</p>
          <button className="order-button">ORDER NOW</button>
        </section>
        <div className="image-section">
          <img src="/path-to-your-image.png" alt="Healthy Fruits" />
        </div>
      </main>
    </div>
  );
}

export default App;
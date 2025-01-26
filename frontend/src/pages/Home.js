import React from 'react';
import { Link } from 'react-router-dom';
import pens from '../images/pens.webp';  // Make sure these paths are correct
import imagett from '../images/imagett.png';
import notebook from '../images/notebook.avif'

function Home() {
  return (
    <div className="home-container">
      <header>
          <nav className="nav-bar">
              {/* <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/products" className="nav-link">Products</Link> */}
          </nav>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h1>Welcome to Lady Kay's Stationery</h1>
          <p>Explore our exquisite collection of writing instruments, beautiful papers, and delightful desk accessories.</p>
          <div className="hero-buttons">
            <Link to="/products" className="hero-button shop-now">Shop Now</Link>
            <Link to="/about" className="hero-button learn-more">Learn More</Link>
          </div>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src={pens} alt="Beautiful Pen" className="product-image" />
              <h3>Finest Writing Pen</h3>
              <p>Crafted with precision and elegance.</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-card">
               <img src={imagett} alt="Elegant Paper" className="product-image" />
              <h3>Luxury Note Cards</h3>
              <p>High-quality paper for the perfect note.</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-card">
            <img src={notebook} alt="Beautiful Pen" className="product-image" />
              <h3>Notebook</h3>
              <p>For the passionate Writers.</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-content">
            <h2>Our Story</h2>
            <p>
              Founded with a passion for the art of handwritten communication and a love for the tactile joy of quality materials, Lady Kay's Stationery strives to inspire creativity and elevate the everyday.
            </p>
          </div>
          <div className="info-content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Premium Quality Products</li>
              <li>Exceptional Customer Service</li>
              <li>Worldwide Shipping</li>
              <li>Curated Collections from Renowned Brands</li>
            </ul>
          </div>
        </section>

        <div className="cta-section">
          <h2>Ready to Elevate Your Writing Experience?</h2>
          <Link to="/productslist" className="cta-button">Browse Our Collection</Link>
        </div>

      </main>

    </div>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Lady Kay's Stationery Company</h1>
        <nav className="header-nav">
          <Link to="/login"className="header-nav-link">Login</Link>
          <Link to ="/signup"className="header-nav-link">Signup</Link>
          <Link to="/" className="header-nav-link">Home</Link>
          <Link to="/about" className="header-nav-link">About</Link>

          <Link to="/products" className="header-nav-link">Products</Link>
        
        </nav>
          <Cart/>
      </div>
    </header>
  );
}

export default Header;
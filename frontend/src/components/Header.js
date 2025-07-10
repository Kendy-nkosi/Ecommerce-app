import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import CartDropdown from './CartDropdown';
import { useAuth } from '../context/AuthContext';
import { CartContext, SearchContext } from '../context/CartContext';

function Header() {
  const { cart } = useContext(CartContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className='header-container'>
      <div className="header-content">
        <h1 className="header-title">Lady Kay Stationery</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">Home</Link>
          <Link to="/about" className="header-nav-link">About</Link>
          <Link to="/productslist" className="header-nav-link">Products</Link>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <button className="header-nav-link dropbtn">My Account <FaUser/></button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {isLoggedIn ? (
                  <>
                    <Link to="/dashboard" className="header-nav-link">Dashboard</Link>
                    <button onClick={logout} className="header-nav-link">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="header-nav-link">Login</Link>
                    <Link to="/signup" className="header-nav-link">Sign Up</Link>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="cart-container" onMouseEnter={toggleCartDropdown} onMouseLeave={toggleCartDropdown}>
            <Link to="/cart">
              <FaShoppingCart className='cart-icon'/>
              <span className="cart-count">{itemCount}</span>
            </Link>
            {isCartDropdownOpen && <CartDropdown />}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
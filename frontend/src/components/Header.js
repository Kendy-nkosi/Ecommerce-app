import React, { useState, useContext } from 'react';
 import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import CartDropdown from './CartDropdown';

function Header() {
   const { cart } = useContext(CartContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false); // NEW STATE

 const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleCartDropdown = () => {    // new function
       setIsCartDropdownOpen(!isCartDropdownOpen);
   }

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
        <header className='header-container'>
            <div className="header-content">
                <h1 className="header-title">Lady Kay Stationery</h1>
                 <nav className="header-nav">
                     <Link to="/" className="header-nav-link">Home</Link>
                        <Link to="/about" className="header-nav-link">About</Link>
                          <Link to="/productslist" className="header-nav-link">Products</Link>
                       <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                          <button className="header-nav-link dropbtn">My Account <FaUser/></button>
                              {isDropdownOpen && (
                                <div className="dropdown-content">
                                   <Link to="/login" className="header-nav-link">Login</Link>
                                    <Link to="/signup" className="header-nav-link">Sign Up</Link>
                               </div>
                            )}
                      </div>
                     <div className="cart-container"  onMouseEnter={toggleCartDropdown} onMouseLeave={toggleCartDropdown}>  {/* cart container now controls the dropdown*/}
                        <Link to="/cart">
                           <FaShoppingCart className='cart-icon' />
                            <span className="cart-count">{itemCount}</span>
                         </Link>
                            {isCartDropdownOpen && <CartDropdown />}  {/* cart dropdown shown on hover of the link*/}
                   </div>
               </nav>
            </div>
        </header>
   );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Cart from './Cart';

 function Header() {
   return (
      <header>
          <h1>My E-Commerce Store</h1>
         <nav>
            <Link to="/">Home</Link> {/* Use Link component */}
           <Link to="/products">Products</Link> {/* Use Link component */}
           <Link to="/cart">Cart</Link> {/* Use Link component */}
         </nav>
         <Cart/>
      </header>
 );
}

export default Header;
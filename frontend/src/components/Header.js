import React from 'react';

function Header() {
    return (
        <header>
            <h1>My E-Commerce Store</h1>
            <nav>
               <a href="/">Home</a>
               <a href="/cart">Cart</a>
            </nav>
        </header>
    );
}

export default Header;